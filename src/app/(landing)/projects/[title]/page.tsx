interface ProjectDetailsProps {
  params: Promise<{
    title: string
  }>
}

export default async function ProjectDetails({ params }: ProjectDetailsProps) {
  const { title } = await params

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="mb-4 text-3xl font-bold">Project Details</h1>
      <div className="rounded-lg bg-gray-100 p-4 dark:bg-gray-800">
        <h2 className="mb-2 text-xl font-semibold">Route Parameters:</h2>
        <p className="text-lg">
          <strong>Title:</strong> {title}
        </p>
      </div>
    </div>
  )
}
