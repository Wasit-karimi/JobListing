import { useQuery } from "@tanstack/react-query"
import { useParams } from "react-router-dom"
import { jobQuery } from "../api/job"
import NotFound from "./NotFound"

const JobDetails = () => {

  const {id} = useParams()

  const {data} = useQuery(jobQuery(id!))

  if(!data) return <NotFound />

  return (
    <div>{data}</div>
  )
}

export default JobDetails