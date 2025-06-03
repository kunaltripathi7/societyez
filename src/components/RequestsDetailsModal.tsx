import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog"
import { Textarea } from "@/components/ui/textarea"
import { Avatar, AvatarFallback } from "@/components/ui/avatar"
import { Button } from "./ui/button";

interface Comment {
  id: string;
  author: string;
  role: 'admin' | 'employee';
  message: string;
  timestamp: string;
}

interface AccessRequest {
    id: string;
  employee: {
    name: string;
    id: string;
  };
  role: string;
  department: string;
  requestDate: string;
  requestTime: string;
  status: 'pending' | 'approved' | 'rejected' | 'more-info-needed';
  comments: Comment[];
  isActive: boolean;
}

// Mock comments for testing
const mockComments: Comment[] = [
  {
    id: '1',
    author: 'Sarah Parker',
    role: 'employee',
    message: 'I need access to the building management system to coordinate maintenance schedules.',
    timestamp: '2023-06-01 03:22 PM'
  },
  {
    id: '2', 
    author: 'Admin',
    role: 'admin',
    message: 'Could you provide more details about which specific modules you need access to?',
    timestamp: '2023-06-01 04:15 PM'
  }
];

// Add this component
const RequestDetailsModal = ({ 
  request, 
  open, 
  onOpenChange 
}: { 
  request: AccessRequest | null;
  open: boolean;
  onOpenChange: (open: boolean) => void;
}) => {
  if (!request) return null;

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="max-w-2xl max-h-[80vh] overflow-y-auto">
        <DialogHeader>
          <DialogTitle>Request Details - {request.employee.name}</DialogTitle>
        </DialogHeader>
        
        <div className="space-y-6">
          {/* Request Info */}
          <div className="grid grid-cols-2 gap-4 p-4 bg-gray-50 rounded-lg">
            <div>
              <p className="text-sm text-gray-500">Role Requested</p>
              <p className="font-medium">{request.role}</p>
            </div>
            <div>
              <p className="text-sm text-gray-500">Department</p>
              <p className="font-medium">{request.department}</p>
            </div>
          </div>

          {/* Comments Thread */}
          <div className="space-y-4">
            <h3 className="font-medium">Communication</h3>
            <div className="space-y-3 max-h-60 overflow-y-auto">
              {mockComments.map((comment) => (
                <div key={comment.id} className={`flex gap-3 ${
                  comment.role === 'admin' ? 'flex-row-reverse' : ''
                }`}>
                  <Avatar className="w-8 h-8">
                    <AvatarFallback className={
                      comment.role === 'admin' ? 'bg-blue-100 text-blue-600' : 'bg-gray-100'
                    }>
                      {comment.author.split(' ').map(n => n[0]).join('')}
                    </AvatarFallback>
                  </Avatar>
                  <div className={`flex-1 ${comment.role === 'admin' ? 'text-right' : ''}`}>
                    <div className={`inline-block p-3 rounded-lg max-w-xs ${
                      comment.role === 'admin' 
                        ? 'bg-blue-500 text-white' 
                        : 'bg-gray-100'
                    }`}>
                      <p className="text-sm">{comment.message}</p>
                    </div>
                    <p className="text-xs text-gray-500 mt-1">{comment.timestamp}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Response Section */}
          <div className="space-y-3">
            <Textarea 
              placeholder="Add a comment or request more information..."
              className="min-h-20"
            />
            <div className="flex gap-2 justify-end">
              <Button variant="outline" onClick={() => onOpenChange(false)}>
                Cancel
              </Button>
              <Button variant="destructive">
                Reject Request
              </Button>
              <Button>
                Request More Info
              </Button>
              <Button className="bg-green-600 hover:bg-green-700">
                Approve Request
              </Button>
            </div>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
}

export default RequestDetailsModal;