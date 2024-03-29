import { HttpRequest } from "@/data/protocols/http/HttpClient"
import { HttpResponse } from "@/data/protocols/http/HttpClient"

export interface IHttpClient<R = any> {
  request: (data: HttpRequest) => Promise<HttpResponse<R>>
}
