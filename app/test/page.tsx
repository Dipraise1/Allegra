export default function TestPage() {
  return (
    <div className="min-h-screen bg-white dark:bg-black flex items-center justify-center">
      <div className="text-center">
        <h1 className="text-4xl font-bold text-foreground mb-4">✅ Test Page Working!</h1>
        <p className="text-muted-foreground">If you can see this, the deployment is working correctly.</p>
        <p className="text-sm text-muted-foreground mt-4">Timestamp: {new Date().toISOString()}</p>
      </div>
    </div>
  )
}
