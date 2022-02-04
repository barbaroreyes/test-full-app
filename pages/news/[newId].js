import {useRouter} from 'next/router'

const NewsDetails= () => {
  const router = useRouter();
const newsId = router.query.newId
    return (
      <div>
        <h1>NewsDetails :{newsId}</h1>
      </div>
    );
  }
  
  export default NewsDetails;
  