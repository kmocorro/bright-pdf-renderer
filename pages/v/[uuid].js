// This is our wrapper component which contains the PDF viewer
import dynamic from 'next/dynamic'
const PDFViewer = dynamic(import('../../components/pdfviewer'), { ssr: false })
import useSWR from 'swr'
import { useRouter } from 'next/router'

const fetcher = url => fetch(url).then(r => r.json())

// get user data
function useBI(uuid){
  if(!uuid){
    return {
      user: '',
      isLoading: false,
      isError: 'No uuid. please login.'
    }
  }
  const { data, error, mutate } = useSWR(`http://10.3.10.209:4546/viewbi?uuid=${uuid}`, fetcher)
  
  return {
    bi: data,
    isBILoading: !error && !data,
    isBIError: error,
    boundBIMutate: mutate
  }
}

export default function ViewUUIDpdf(){
  
  const router = useRouter()
  const { uuid } = router.query
  const { bi, isBILoading, isBIError, boundBIMutate } = useBI(uuid);

  if(isBIError) return <div>failed to load.</div>
  if(!bi) return <div>loading...</div>

  console.log(bi)
  return (
    <div>
      <PDFViewer bi={bi[0]} />
    </div>
  );
}