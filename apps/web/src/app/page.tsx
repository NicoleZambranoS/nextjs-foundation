import Script from 'next/script'

export default function HomePage() {
  return (
    <>
      <Script
        src="https://widget.example.com/chat.js"
        strategy="lazyOnload"
      />
      <Script
        src="https://platform.twitter.com/widgets.js"
        strategy="lazyOnload"
      />
      <main>
        <h1>Welcome</h1>
      </main>
    </>
  )
}