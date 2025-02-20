
import { useParams } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { useToast } from "@/hooks/use-toast";

const BookingDetails = () => {
  const { id } = useParams();
  const { toast } = useToast();

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-2xl font-bold mb-6">Booking Details</h1>
      <div className="glass-card p-6 rounded-xl text-center">
        <p className="text-muted-foreground mb-4">
          Booking details will be implemented in the next iteration
        </p>
        <Button
          onClick={() => {
            toast({
              title: "Coming Soon",
              description: "Booking details will be implemented shortly",
            });
          }}
        >
          Refresh Details
        </Button>
      </div>
    </div>
  );
};

export default BookingDetails;
