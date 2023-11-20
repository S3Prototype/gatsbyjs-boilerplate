export default function handler(request, response) {
  // const blogId = request.params.id;

  console.log('/api/[id]');

  response.status(200).json({
    body: request.body,
    params: request.params,
    query: request.query,
    cookies: request.cookies,
  });
}