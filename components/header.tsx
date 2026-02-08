import { Button } from "@/components/ui/button"

export function Header() {
  return (
    <header className="w-full border-b border-[#242429]/6 bg-[#f7f5f3]">
      <div className="max-w-[1060px] mx-auto px-4">
        <nav className="flex items-center justify-between py-4">
          <div className="flex items-center space-x-8">
            <div className="text-[#242429] font-semibold text-lg">Stealery</div>
            <div className="hidden md:flex items-center space-x-6">
              <button className="text-[#242429] hover:text-[#242429]/80 text-sm font-medium">Products</button>
              <button className="text-[#242429] hover:text-[#242429]/80 text-sm font-medium">Pricing</button>
              <button className="text-[#242429] hover:text-[#242429]/80 text-sm font-medium">Docs</button>
            </div>
          </div>
          <Button variant="ghost" className="text-[#242429] hover:bg-[#242429]/5">
            Log in
          </Button>
        </nav>
      </div>
    </header>
  )
}
