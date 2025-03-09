import Link from "next/link"
import { ArrowLeft, Home } from "lucide-react"

export default function NotFound() {
    return (
        <div className="flex min-h-screen flex-col items-center justify-center bg-gradient-to-b from-background to-muted p-4 text-center">
            <div className="max-w-md space-y-8">
                <div>
                    <h1 className="text-9xl font-extrabold tracking-tight flex justify-center">
                        <span className="text-red-500">4</span>
                        <span className="text-blue-500">0</span>
                        <span className="text-red-500">4</span>
                    </h1>
                </div>

                <div className="space-y-4">
                    <h2 className="text-2xl font-bold tracking-tight">Page not found</h2>
                    <p className="text-muted-foreground">
                        Sorry, we couldn't find the page you're looking for. It might have been moved, deleted, or never existed.
                    </p>
                </div>

                <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                    <Link
                        href="/"
                        className="inline-flex items-center justify-center gap-2 rounded-md bg-black text-white px-4 py-2 text-sm font-medium text-primary-foreground shadow hover:bg-primary/90"
                    >
                        <Home className="h-4 w-4" />
                        Back to home
                    </Link>
                    <Link
                        href="javascript:history.back()"
                        className="inline-flex items-center justify-center gap-2 rounded-md border border-input bg-background px-4 py-2 text-sm font-medium shadow-sm hover:bg-accent hover:text-accent-foreground"
                    >
                        <ArrowLeft className="h-4 w-4" />
                        Go back
                    </Link>
                </div>
            </div>
        </div>
    )
}

