
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { useToast } from "@/hooks/use-toast";
import { Bus, User } from "lucide-react";

const Navbar = () => {
  const { toast } = useToast();

  return (
    <nav className="border-b bg-white/50 backdrop-blur-sm sticky top-0 z-50">
      <div className="container mx-auto px-4 py-3">
        <div className="flex items-center justify-between">
          <Link to="/" className="flex items-center space-x-2">
            <Bus className="h-6 w-6 text-brand-500" />
            <span className="text-xl font-semibold text-brand-500">BusGo</span>
          </Link>
          
          <div className="flex items-center space-x-4">
            <Link to="/search">
              <Button variant="ghost">Search</Button>
            </Link>
            <Link to="/login">
              <Button variant="ghost" className="flex items-center">
                <User className="mr-2 h-4 w-4" />
                Login
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
