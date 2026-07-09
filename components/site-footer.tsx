export default function SiteFooter() {
  return (
    <footer className="py-6 md:px-8 md:py-0 border-t">
      <div className="container flex flex-col items-center justify-between gap-4 md:h-24 md:flex-row">
        <p className="text-balance text-center text-sm leading-loose text-muted-foreground md:text-left">
          Built by <a href="#" target="_blank" rel="noreferrer" className="font-medium underline underline-offset-4">Scrap Finance Partners</a>. 
          <br/>
          <span className="text-xs">
            This website is for consultancy positioning and does not provide legal, tax, audit or regulated financial advice. Formal accountancy, tax, audit, AML or compliance services should be provided only through appropriately qualified and supervised professionals.
          </span>
        </p>
      </div>
    </footer>
  )
}
