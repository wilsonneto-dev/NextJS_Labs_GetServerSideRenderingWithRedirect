import type { NextPage } from 'next'

const Home: NextPage = () => {
  return (
    <div>
        <h1>Opa vc ta autenticado man!</h1>
    </div>
  )
}

export async function getServerSideProps(context) {
  const authenticated = context.req.url.lastIndexOf("auth=true") >= 0;
  
  if(!authenticated) {
    return {
      redirect: {
        destination: '/',
        permanent: false,
      },
    };
  }

  return {
    props: {},
  }
}

export default Home
