function CountryCardSkeleton() {
  return (
    <div className="card overflow-hidden">
      {/* Skeleton flag */}
      <div className="h-40 skeleton"></div>
      
      {/* Skeleton content */}
      <div className="p-6">
        <div className="h-7 w-3/4 skeleton mb-4 rounded"></div>
        
        <div className="space-y-3">
          <div className="h-5 w-full skeleton rounded"></div>
          <div className="h-5 w-2/3 skeleton rounded"></div>
          <div className="h-5 w-3/4 skeleton rounded"></div>
        </div>
      </div>
    </div>
  )
}

export default CountryCardSkeleton