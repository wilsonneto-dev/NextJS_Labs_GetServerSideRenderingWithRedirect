import type { GetServerSideProps, NextPage, NextPageContext } from 'next'

const Home: NextPage = () => {
  return (
    <div>
        <h1>Opa vc ta autenticado man!</h1>
    </div>
  )
}

export const getServerSideProps: GetServerSideProps = async (context) => {
  const authenticated = (context?.req?.url?.lastIndexOf("auth=true") || -1) >= 0;
  
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
