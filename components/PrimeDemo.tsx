
// components/PrimeDemo.tsx
'use client';
import React, { useState } from 'react';
import { Button } from 'primereact/button';
import { InputText } from 'primereact/inputtext';
import { DataTable } from 'primereact/datatable';
import { Column } from 'primereact/column';
import { useAppSelector, useAppDispatch } from '../redux/hooks';
import { increment, decrement, addItem, removeItem } from '../redux/slices/counterSlice';
import { v4 as uuidv4 } from 'uuid';

export default function PrimeDemo() {
  const count = useAppSelector(s => s.counter.value);
  const items = useAppSelector(s => s.counter.items);
  const dispatch = useAppDispatch();

  const [name, setName] = useState('');

  function handleAdd() {
    if (!name.trim()) return;
    dispatch(addItem({ id: uuidv4(), name }));
    setName('');
  }

  return (
    <div className="p-4">
      <section className="p-card p-shadow-2" style={{ padding: 16, marginBottom: 18 }}>
        <h3>Counter (Redux)</h3>
        <div className="p-d-flex p-jc-start p-ai-center" style={{ gap: 10 }}>
          <Button icon="pi pi-minus" onClick={() => dispatch(decrement())} />
          <div style={{ minWidth: 48, textAlign: 'center', fontSize: 18 }}>{count}</div>
          <Button icon="pi pi-plus" onClick={() => dispatch(increment())} />
        </div>
      </section>

      <section className="p-card p-shadow-2" style={{ padding: 16 }}>
        <h3>Items (Redux)</h3>
        <div className="p-d-flex p-ai-center" style={{ gap: 8, marginBottom: 12 }}>
          <InputText placeholder="item name" value={name} onChange={(e) => setName(e.target.value)} />
          <Button label="Add" icon="pi pi-plus" onClick={handleAdd} />
        </div>

        <DataTable value={items} emptyMessage="No items yet">
          <Column field="name" header="Name" />
          <Column
            header="Actions"
            body={(rowData: any) => (
              <Button icon="pi pi-trash" className="p-button-danger" onClick={() => dispatch(removeItem(rowData.id))} />
            )}
          />
        </DataTable>
      </section>
    </div>
  );
}
