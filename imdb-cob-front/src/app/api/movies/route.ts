export async function GET() {
  try {
    const result = await fetch('http://localhost:8000/movies', {
      method: 'GET',
      cache: 'no-store',
      headers: {
        Authorization:
          'bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJlNTExYzFmOGY0YjE0NWI1MWY5ZTkxNmZhMWQ1MDk4ZiIsInN1YiI6IjY2MzAwYTAwYTBmMWEyMDEyYzI3MTIyMiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.l31PGGqCEzncD2dfk84EkqwqtzjjPp_oLljsosNk_JI',
        'Content-Type': 'application/json',
        Accept: 'application/json',
      },
    })

    const resultJson = await result.json()
    return Response.json(resultJson)
  } catch (error: any) {
    return []
  }
}

export async function POST(req: Request) {
  try {
    const result = await fetch('http://localhost:8000/movies', {
      method: 'POST',
      cache: 'no-store',
      headers: {
        Authorization:
          'bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJlNTExYzFmOGY0YjE0NWI1MWY5ZTkxNmZhMWQ1MDk4ZiIsInN1YiI6IjY2MzAwYTAwYTBmMWEyMDEyYzI3MTIyMiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.l31PGGqCEzncD2dfk84EkqwqtzjjPp_oLljsosNk_JI',
        'Content-Type': 'application/json',
        Accept: 'application/json',
      },
      body: JSON.stringify(await req.json())
    })

    const resultJson = await result.json()
    return Response.json(resultJson)
  } catch (error: any) {
    return []
  }
}