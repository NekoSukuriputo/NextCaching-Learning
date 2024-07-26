import Messages from '@/components/messages';

// export const revalidate = 5; // same as next{revalidate: 5}

// export const dynamic = 'force-dynamic';// same as cache: 'no-store'

export default async function MessagesPage() {
  const response = await fetch('http://localhost:8080/messages', {
    headers: {
      'X-ID': 'page',
    },
   next: {
     revalidate: 5,
   }
  });
  const messages = await response.json();

  if (!messages || messages.length === 0) {
    return <p>No messages found</p>;
  }

  return <Messages messages={messages} />;
}
