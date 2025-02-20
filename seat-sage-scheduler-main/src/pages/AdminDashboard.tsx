
import { Button } from "@/components/ui/button";
import { useToast } from "@/hooks/use-toast";

const AdminDashboard = () => {
  const { toast } = useToast();

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-2xl font-bold mb-6">Admin Dashboard</h1>
      <div className="glass-card p-6 rounded-xl text-center">
        <p className="text-muted-foreground mb-4">
          Admin dashboard will be implemented with Supabase integration
        </p>
        <Button
          onClick={() => {
            toast({
              title: "Coming Soon",
              description: "Admin features will be implemented shortly",
            });
          }}
        >
          Refresh Data
        </Button>
      </div>
    </div>
  );
};

export default AdminDashboard;
