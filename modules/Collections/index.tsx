import getRequest from "@/server/getRequest"
import CollectionsContent from "./CollectionsContent"

const Collections = async () => {
  const collections = await getRequest("/collections")
  return (
    <CollectionsContent collections={collections.data}/>
  )
}

export default Collections