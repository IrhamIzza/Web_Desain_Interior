import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";


export default function DropdownPemesanan({ value,onChange, placeholder, items = [] }) {
  return (
    <div className="flex gap-6 items-center w-full">
      <DropdownMenu>
        <DropdownMenuTrigger asChild>
          <Button
            variant="outline"
              className={`flex justify-between items-center w-full ${
                value ? "text-black border-gray-400" : "text-gray-400"
              }`}
          >
            {value || placeholder}
            <i className="ph ph-duotone ph-caret-circle-down text-xl"></i>
          </Button>
        </DropdownMenuTrigger>

        <DropdownMenuContent className="w-[var(--radix-dropdown-menu-trigger-width)] bg-white">
          <DropdownMenuGroup>
            {items.map((item) => (
              <DropdownMenuItem
                key={item}
                onSelect={() => onChange(item)}
              >
                {item}
              </DropdownMenuItem>
            ))}
          </DropdownMenuGroup>
        </DropdownMenuContent>
      </DropdownMenu>
    </div>
  );
}   