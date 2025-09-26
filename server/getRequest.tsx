import { API } from "@/hooks"

export const getRequest = async (url:string) => {
    const res = await fetch(`${API}${url}`, {
    next: {revalidate:60},
    })
  return res.json()
}
export default getRequest