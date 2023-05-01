import React, {useState, useEffect} from 'react'
import axios from 'axios'

type DataProps = {
  data: {
    id: number;
    body: string;
    postId: number;
  }
}[]

type ErrorMsgProps = {
  message?: string
}

const Traditional:React.FC = () => {
  const [isLoading, setIsLoading] = useState<boolean>(true)
  const [newData, setNewData] = useState<DataProps>([])
  const [errorMsg, setErrorMsg] = useState<ErrorMsgProps | undefined>(undefined)

  //console.log("errorMsg: ", errorMsg?.message)

  useEffect(() => {
    const callerFunc = async () => {
      await axios
        .get('http://localhost:4000/comments/')
        .then((res) => {
          setNewData(res.data)
          setIsLoading(false)
      })
      .catch((error) => {
        setErrorMsg(error.message)
        setIsLoading(false)
      })
    }
    callerFunc();
    return () => console.log("clean-up!")
  }, [])

  if (isLoading) {
    return <h2>Loading...</h2>
  }

  if (errorMsg) {
    return <h2>{errorMsg}</h2>
  }

  return (
    <>
      <h1>Traditional</h1>
      <h2>Result of request :</h2>
      {newData?.map((d) => (
        <div key={d.id}>
          <p>ID: {d.id}</p>
          <p>Text: {d.text}</p>
          <p>Author: {d.author}</p>
        </div>
        )
      )}
    </>
  )
}
export default Traditional;

/*
  useEffect(() => {
    const functionDb = async () => {
      const res = await fetch('http://localhost:4000/comments')
      const data = await res.json()
      setNewData(data)
      setIsLoading(false)
    }
    functionDb()
    return () => console.log("clean-up!")
  }, [])
*/