'use client';
import { useQuery } from '@tanstack/react-query';
import { DataTable } from 'primereact/datatable';
import { Column } from 'primereact/column';
import { ProgressSpinner } from 'primereact/progressspinner';

async function fetchPosts() {
  const res = await fetch('https://jsonplaceholder.typicode.com/posts?_limit=5');
  if (!res.ok) throw new Error('Failed to fetch');
  return res.json();
}

export default function PostsDemo() {
  const { data, error, isLoading } = useQuery({
    queryKey: ['posts'],
    queryFn: fetchPosts,
  });

  if (isLoading) return <ProgressSpinner />;
  if (error instanceof Error) return <p style={{ color: 'red' }}>❌ {error.message}</p>;

  return (
    <div style={{ marginTop: 24 }}>
      <h3>Fetched Posts (TanStack Query)</h3>
      <DataTable value={data}>
        <Column field="id" header="ID" />
        <Column field="title" header="Title" />
      </DataTable>
    </div>
  );
}
