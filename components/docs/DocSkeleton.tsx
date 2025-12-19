export default function DocSkeleton() {
  return (
    <div className="container grid grid-cols-1 lg:grid-cols-[240px_minmax(0,1fr)_200px] gap-8 py-10 animate-pulse">
      {/* Left sidebar skeleton */}
      <aside className="hidden lg:block">
        <nav className="sticky top-24 space-y-4">
          <div className="space-y-3">
            <div className="h-3 w-20 bg-muted dark:bg-muted/20 rounded"></div>
            <div className="space-y-2">
              {[1, 2, 3, 4].map((i) => (
                <div key={i} className="h-6 bg-muted dark:bg-muted/20 rounded"></div>
              ))}
            </div>
          </div>
          <div className="space-y-3 mt-6">
            <div className="h-3 w-24 bg-muted dark:bg-muted/20 rounded"></div>
            <div className="space-y-2">
              {[1, 2, 3].map((i) => (
                <div key={i} className="h-6 bg-muted dark:bg-muted/20 rounded"></div>
              ))}
            </div>
          </div>
        </nav>
      </aside>

      {/* Main content skeleton */}
      <article className="prose prose-slate dark:prose-invert max-w-none pt-14">
        {/* Breadcrumb skeleton */}
        <div className="h-5 w-48 bg-muted dark:bg-muted/20 rounded mb-6"></div>
        
        {/* Title skeleton */}
        <div className="h-10 w-3/4 bg-muted dark:bg-muted/20 rounded mb-8"></div>
        
        {/* Content lines skeleton */}
        <div className="space-y-4">
          <div className="h-4 w-full bg-muted dark:bg-muted/20 rounded"></div>
          <div className="h-4 w-5/6 bg-muted dark:bg-muted/20 rounded"></div>
          <div className="h-4 w-full bg-muted dark:bg-muted/20 rounded"></div>
          <div className="h-4 w-4/6 bg-muted dark:bg-muted/20 rounded"></div>
          <div className="h-4 w-full bg-muted dark:bg-muted/20 rounded"></div>
          <div className="h-4 w-5/6 bg-muted dark:bg-muted/20 rounded"></div>
        </div>
        
        {/* Section skeleton */}
        <div className="mt-8 space-y-4">
          <div className="h-8 w-64 bg-muted dark:bg-muted/20 rounded"></div>
          <div className="h-4 w-full bg-muted dark:bg-muted/20 rounded"></div>
          <div className="h-4 w-full bg-muted dark:bg-muted/20 rounded"></div>
          <div className="h-4 w-3/4 bg-muted dark:bg-muted/20 rounded"></div>
        </div>

        {/* Navigation skeleton */}
        <div className="mt-12 flex items-center justify-between border-t border-border pt-6">
          <div className="h-5 w-32 bg-muted dark:bg-muted/20 rounded"></div>
          <div className="h-5 w-32 bg-muted dark:bg-muted/20 rounded"></div>
        </div>
      </article>

      {/* Right sidebar skeleton */}
      <aside className="hidden lg:block">
        <div className="sticky top-24 text-xs">
          <div className="h-5 w-24 bg-muted dark:bg-muted/20 rounded mb-4"></div>
          <ul className="space-y-2">
            {[1, 2, 3, 4, 5].map((i) => (
              <li key={i}>
                <div className="h-4 bg-muted dark:bg-muted/20 rounded" style={{ width: `${60 + Math.random() * 40}%` }}></div>
              </li>
            ))}
          </ul>
        </div>
      </aside>
    </div>
  );
}

