
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Calendar } from "@/components/ui/calendar";
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover";
import { CalendarIcon, Search } from "lucide-react";
import { format } from "date-fns";
import { cn } from "@/lib/utils";

const Index = () => {
  const navigate = useNavigate();
  const [date, setDate] = useState<Date>();
  const [from, setFrom] = useState("");
  const [to, setTo] = useState("");

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    navigate("/search", { 
      state: { 
        from, 
        to, 
        date: date?.toISOString() 
      } 
    });
  };

  return (
    <div className="relative min-h-[calc(100vh-4rem)] flex items-center justify-center p-4">
      <div className="absolute inset-0 spotlight" />
      
      <div className="relative z-10 w-full max-w-2xl mx-auto text-center">
        <div className="animate-in">
          <h1 className="text-4xl sm:text-6xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-brand-500 to-brand-700">
            Travel Made Simple
          </h1>
          <p className="text-lg text-muted-foreground mb-8">
            Book your bus tickets with ease. Thousands of routes. One platform.
          </p>
        </div>

        <form onSubmit={handleSearch} className="glass-card p-6 rounded-xl space-y-4">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <Input
              placeholder="From"
              value={from}
              onChange={(e) => setFrom(e.target.value)}
              className="bg-white/50"
            />
            <Input
              placeholder="To"
              value={to}
              onChange={(e) => setTo(e.target.value)}
              className="bg-white/50"
            />
          </div>

          <div className="flex items-center gap-4">
            <Popover>
              <PopoverTrigger asChild>
                <Button
                  variant="outline"
                  className={cn(
                    "w-full justify-start text-left font-normal bg-white/50",
                    !date && "text-muted-foreground"
                  )}
                >
                  <CalendarIcon className="mr-2 h-4 w-4" />
                  {date ? format(date, "PPP") : <span>Pick a date</span>}
                </Button>
              </PopoverTrigger>
              <PopoverContent className="w-auto p-0">
                <Calendar
                  mode="single"
                  selected={date}
                  onSelect={setDate}
                  initialFocus
                />
              </PopoverContent>
            </Popover>

            <Button type="submit" className="w-full sm:w-auto">
              <Search className="mr-2 h-4 w-4" />
              Search
            </Button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Index;
