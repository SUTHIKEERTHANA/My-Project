
import { useLocation } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { useToast } from "@/hooks/use-toast";

const Search = () => {
  const location = useLocation();
  const { toast } = useToast();
  const searchParams = location.state;

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-2xl font-bold mb-6">Available Buses</h1>
      <div className="glass-card p-6 rounded-xl text-center">
        <p className="text-muted-foreground mb-4">
          Search results will be implemented in the next iteration
        </p>
        <Button
          onClick={() => {
            toast({
              title: "Coming Soon",
              description: "Bus search functionality will be implemented shortly",
            });
          }}
        >
          Refresh Results
        </Button>
      </div>
    </div>
  );
};

export default Search;
