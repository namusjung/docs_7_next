export default function ApiSkeleton() {
  return (
    <div className="w-full max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-1 lg:grid-cols-[220px_minmax(0,1fr)_450px] gap-8 py-10 pt-24 animate-pulse">
      {/* Left sidebar skeleton */}
      <aside className="hidden lg:block w-[220px]">
        <nav className="sticky top-28 space-y-4">
          <div className="space-y-3">
            <div className="h-3 w-20 bg-muted dark:bg-muted/20 rounded"></div>
            <div className="space-y-2">
              {[1, 2, 3].map((i) => (
                <div key={i} className="h-6 bg-muted dark:bg-muted/20 rounded"></div>
              ))}
            </div>
          </div>
        </nav>
      </aside>

      {/* Main content skeleton */}
      <article className="prose prose-slate dark:prose-invert max-w-none pt-24">
        {/* Breadcrumb skeleton */}
        <div className="h-5 w-32 bg-muted dark:bg-muted/20 rounded mb-6"></div>

        {/* Title skeleton */}
        <div className="h-10 w-2/3 bg-muted dark:bg-muted/20 rounded mb-8"></div>

        {/* Content lines skeleton */}
        <div className="space-y-4">
          <div className="h-4 w-full bg-muted dark:bg-muted/20 rounded"></div>
          <div className="h-4 w-5/6 bg-muted dark:bg-muted/20 rounded"></div>
          <div className="h-4 w-full bg-muted dark:bg-muted/20 rounded"></div>
          <div className="h-4 w-4/6 bg-muted dark:bg-muted/20 rounded"></div>
        </div>

        {/* Navigation skeleton */}
        <div className="mt-12 flex items-center justify-between border-t border-border pt-6">
          <div className="h-5 w-32 bg-muted dark:bg-muted/20 rounded"></div>
          <div className="h-5 w-32 bg-muted dark:bg-muted/20 rounded"></div>
        </div>
      </article>

      {/* Right sidebar skeleton */}
      <aside className="hidden lg:block">
        <div className="sticky top-28 text-xs">
          <div className="space-y-4">
            <div className="h-6 w-32 bg-muted dark:bg-muted/20 rounded"></div>
            <div className="h-4 w-full bg-muted dark:bg-muted/20 rounded"></div>
            <div className="h-4 w-full bg-muted dark:bg-muted/20 rounded"></div>
            <div className="h-4 w-3/4 bg-muted dark:bg-muted/20 rounded"></div>
          </div>
        </div>
      </aside>
    </div>
  );
}

