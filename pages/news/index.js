import Link from 'next/link'
const NewsPage= () => {
    return (
      <>
        <h1> The News Page</h1>
        <ul>
            <li><Link href='/news/great-frame'>a great framework</Link></li>
            <li><a>something-else</a></li>
        </ul>
      </>
    );
  }
  
  export default NewsPage;
  