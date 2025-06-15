import { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { Button } from '@/components/ui/button';
import { Textarea } from '@/components/ui/textarea';
import { Badge } from '@/components/ui/badge';
import { Separator } from '@/components/ui/separator';
import { 
  Phone, 
  Mail, 
  Calendar, 
  Clock, 
  Check, 
  AlertTriangle,
  Bold,
  Italic,
  Link,
  List,
  Paperclip,
  ChevronDown,
  User,
  MessageSquare,
} from 'lucide-react';

const SupportTechnicalTab = () => {
  const [message, setMessage] = useState('');

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header Tabs */}
      <div className="bg-white border-b">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 xl:grid-cols-3 gap-4 sm:gap-6 p-4 sm:p-6">
            {/* Left Sidebar - Support Information */}
            <div className="xl:col-span-1 space-y-4 sm:space-y-6 order-2 xl:order-1">
              <Card>
                <CardHeader className="pb-3 sm:pb-6">
                  <CardTitle className="text-base sm:text-lg font-semibold flex items-center gap-2">
                    <User className="h-4 w-4 sm:h-5 sm:w-5" />
                    <span className="hidden sm:inline">Support Information</span>
                    <span className="sm:hidden">Support Info</span>
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-4 sm:space-y-6">
                  {/* Assigned Support Agent */}
                  <div className="space-y-3">
                    <div className="flex items-center gap-2 text-xs sm:text-sm text-gray-600">
                      <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
                      <span className="hidden sm:inline">Assigned Support Agent</span>
                      <span className="sm:hidden">Agent</span>
                    </div>
                    <div className="flex items-start sm:items-center gap-3">
                      <Avatar className="h-8 w-8 sm:h-10 sm:w-10 flex-shrink-0">
                        <AvatarImage src="/api/placeholder/32/32" />
                        <AvatarFallback>SJ</AvatarFallback>
                      </Avatar>
                      <div className="min-w-0 flex-1">
                        <div className="font-medium text-sm sm:text-base truncate">Sarah Johnson</div>
                        <div className="flex items-center gap-2 text-xs sm:text-sm text-gray-500">
                          <Mail className="h-3 w-3 flex-shrink-0" />
                          <span className="truncate">sarah.j@support.com</span>
                        </div>
                        <div className="flex items-center gap-2 text-xs sm:text-sm text-gray-500">
                          <Phone className="h-3 w-3 flex-shrink-0" />
                          <span>+1 (555) 123-4567</span>
                        </div>
                      </div>
                    </div>
                  </div>

                  <Separator />

                  {/* Support Status */}
                  <div className="space-y-3">
                    <div className="flex items-center gap-2 text-xs sm:text-sm text-gray-600">
                      <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
                      Support Status
                    </div>
                    <Badge className="bg-green-100 text-green-800 hover:bg-green-100 text-xs sm:text-sm">
                      <div className="w-2 h-2 bg-green-600 rounded-full mr-2"></div>
                      Active
                    </Badge>
                  </div>

                  <Separator />

                  {/* Last Updated */}
                  <div className="space-y-3">
                    <div className="flex items-center gap-2 text-xs sm:text-sm text-gray-600">
                      <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
                      Last Updated
                    </div>
                    <div className="font-medium text-sm sm:text-base">
                      <span className="hidden sm:inline">June 3, 2023 - 14:35 PM</span>
                      <span className="sm:hidden">Jun 3, 2023</span>
                    </div>
                  </div>

                  <Separator />

                  {/* Assigned Date */}
                  <div className="space-y-3">
                    <div className="flex items-center gap-2 text-xs sm:text-sm text-gray-600">
                      <Calendar className="h-4 w-4 text-blue-500" />
                      Assigned Date
                    </div>
                    <div className="font-medium text-sm sm:text-base">
                      <span className="hidden sm:inline">May 28, 2023</span>
                      <span className="sm:hidden">May 28, 2023</span>
                    </div>
                  </div>
                </CardContent>
              </Card>

              {/* Status Timeline */}
              <Card>
                <CardHeader className="pb-3 sm:pb-6">
                  <CardTitle className="text-base sm:text-lg font-semibold">Status Timeline</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    <div className="flex items-start gap-3">
                      <div className="flex items-center justify-center w-6 h-6 bg-green-100 rounded-full flex-shrink-0">
                        <Check className="h-3 w-3 text-green-600" />
                      </div>
                      <div className="flex-1 min-w-0">
                        <div className="font-medium text-sm">Created</div>
                        <div className="text-xs text-gray-500">
                          <span className="hidden sm:inline">May 28, 2023 - 09:12 AM</span>
                          <span className="sm:hidden">May 28, 09:12</span>
                        </div>
                      </div>
                    </div>
                    <div className="flex items-start gap-3">
                      <div className="flex items-center justify-center w-6 h-6 bg-green-100 rounded-full flex-shrink-0">
                        <Check className="h-3 w-3 text-green-600" />
                      </div>
                      <div className="flex-1 min-w-0">
                        <div className="font-medium text-sm">In Progress</div>
                        <div className="text-xs text-gray-500">
                          <span className="hidden sm:inline">May 29, 2023 - 11:45 AM</span>
                          <span className="sm:hidden">May 29, 11:45</span>
                        </div>
                      </div>
                    </div>
                    <div className="flex items-start gap-3">
                      <div className="flex items-center justify-center w-6 h-6 bg-yellow-100 rounded-full flex-shrink-0">
                        <Clock className="h-3 w-3 text-yellow-600" />
                      </div>
                      <div className="flex-1 min-w-0">
                        <div className="font-medium text-sm">Active</div>
                        <div className="text-xs text-gray-500">
                          <span className="hidden sm:inline">June 3, 2023 - 14:35 PM</span>
                          <span className="sm:hidden">Jun 3, 14:35</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>

            {/* Right Panel - Conversation Thread */}
            <div className="xl:col-span-2 order-1 xl:order-2">
              <Card className="h-full">
                <CardHeader className="pb-3 sm:pb-6">
                  <CardTitle className="text-base sm:text-lg font-semibold flex items-center gap-2">
                    <MessageSquare className="h-4 w-4 sm:h-5 sm:w-5" />
                    <span className="hidden sm:inline">Conversation Thread</span>
                    <span className="sm:hidden">Messages</span>
                  </CardTitle>
                </CardHeader>
                <CardContent className="flex flex-col h-full">
                  <div className="flex-1 space-y-4 sm:space-y-6 mb-4 sm:mb-6 overflow-y-auto max-h-[400px] sm:max-h-[500px]">
                    {/* Initial Message */}
                    <div className="flex gap-2 sm:gap-3">
                      <Avatar className="h-6 w-6 sm:h-8 sm:w-8 flex-shrink-0">
                        <AvatarImage src="/api/placeholder/32/32" />
                        <AvatarFallback>MC</AvatarFallback>
                      </Avatar>
                      <div className="flex-1 min-w-0">
                        <div className="flex flex-wrap items-center gap-1 sm:gap-2 mb-2">
                          <span className="font-medium text-sm sm:text-base">Michael Chen</span>
                          <Badge variant="secondary" className="text-xs">Society Admin</Badge>
                          <span className="text-xs text-gray-500 hidden sm:inline">May 28, 2023 - 09:12 AM</span>
                          <span className="text-xs text-gray-500 sm:hidden">May 28</span>
                        </div>
                        <div className="bg-gray-50 rounded-lg p-2 sm:p-3 text-xs sm:text-sm">
                          We're experiencing issues with the visitor management system. The QR code scanner at 
                          the gate isn't registering properly and visitors are having trouble getting in. Can 
                          someone look into this as soon as possible?
                        </div>
                      </div>
                    </div>

                    {/* Support Response */}
                    <div className="flex gap-2 sm:gap-3">
                      <Avatar className="h-6 w-6 sm:h-8 sm:w-8 flex-shrink-0">
                        <AvatarImage src="/api/placeholder/32/32" />
                        <AvatarFallback>SJ</AvatarFallback>
                      </Avatar>
                      <div className="flex-1 min-w-0">
                        <div className="flex flex-wrap items-center gap-1 sm:gap-2 mb-2">
                          <span className="font-medium text-sm sm:text-base">Sarah Johnson</span>
                          <Badge variant="secondary" className="text-xs">Support Agent</Badge>
                          <span className="text-xs text-gray-500 hidden sm:inline">May 29, 2023 - 11:45 AM</span>
                          <span className="text-xs text-gray-500 sm:hidden">May 29</span>
                        </div>
                        <div className="bg-blue-50 rounded-lg p-2 sm:p-3 text-xs sm:text-sm">
                          <p className="mb-2 sm:mb-3">Thanks for reporting this issue, Michael. I'll look into the QR scanner problem right away. 
                          Could you please provide some more details:</p>
                          <ul className="list-disc list-inside space-y-1 text-xs sm:text-sm">
                            <li>When did you first notice the problem?</li>
                            <li>Are all visitors affected or just some?</li>
                            <li>Have you tried restarting the scanner device?</li>
                            <li>Is the issue happening at all gates or specific ones?</li>
                          </ul>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Message Composer */}
                  <div className="border-t pt-3 sm:pt-4">
                    <div className="flex flex-col sm:flex-row sm:items-center gap-2 sm:gap-2 mb-3">
                      <Button variant="outline" size="sm" className="flex items-center gap-1 w-full sm:w-auto">
                        Send Message
                        <ChevronDown className="h-3 w-3" />
                      </Button>
                      <div className="flex items-center gap-2">
                        <input type="checkbox" id="internal" className="rounded" />
                        <label htmlFor="internal" className="text-sm text-gray-600">Internal Note</label>
                      </div>
                    </div>

                    {/* Formatting Toolbar */}
                    <div className="flex items-center gap-1 mb-3 p-2 border rounded-t-lg bg-gray-50 overflow-x-auto">
                      <Button variant="ghost" size="sm" className="flex-shrink-0">
                        <Bold className="h-4 w-4" />
                      </Button>
                      <Button variant="ghost" size="sm" className="flex-shrink-0">
                        <Italic className="h-4 w-4" />
                      </Button>
                      <Button variant="ghost" size="sm" className="flex-shrink-0">
                        <Link className="h-4 w-4" />
                      </Button>
                      <Button variant="ghost" size="sm" className="flex-shrink-0">
                        <List className="h-4 w-4" />
                      </Button>
                      <Button variant="ghost" size="sm" className="flex-shrink-0">
                        <Paperclip className="h-4 w-4" />
                      </Button>
                    </div>

                    <Textarea
                      placeholder="Type your message here..."
                      value={message}
                      onChange={(e) => setMessage(e.target.value)}
                      className="min-h-[80px] sm:min-h-[100px] rounded-t-none border-t-0 text-sm sm:text-base"
                    />

                    <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3 sm:gap-0 mt-4">
                      <div className="flex flex-col sm:flex-row gap-2">
                        <Button variant="outline" className="flex items-center gap-2 text-xs sm:text-sm">
                          <AlertTriangle className="h-3 w-3 sm:h-4 sm:w-4" />
                          Escalate
                        </Button>
                        <Button variant="outline" className="flex items-center gap-2 text-xs sm:text-sm">
                          <Check className="h-3 w-3 sm:h-4 sm:w-4" />
                          Mark Resolved
                        </Button>
                      </div>
                      <Button className="bg-blue-600 hover:bg-blue-700 w-full sm:w-auto">
                        Send
                      </Button>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SupportTechnicalTab;