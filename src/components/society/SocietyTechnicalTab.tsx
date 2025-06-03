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
} from 'lucide-react';

const SupportTechnicalTab = () => {
  const [message, setMessage] = useState('');

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header Tabs */}
      <div className="bg-white border-b">
        <div className="max-w-7xl mx-auto px-4">
              <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 p-6">
                {/* Left Sidebar - Support Information */}
                <div className="lg:col-span-1 space-y-6">
                  <Card>
                    <CardHeader>
                      <CardTitle className="text-lg font-semibold">Support Information</CardTitle>
                    </CardHeader>
                    <CardContent className="space-y-6">
                      {/* Assigned Support Agent */}
                      <div className="space-y-3">
                        <div className="flex items-center gap-2 text-sm text-gray-600">
                          <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
                          Assigned Support Agent
                        </div>
                        <div className="flex items-center gap-3">
                          <Avatar className="h-8 w-8">
                            <AvatarImage src="/api/placeholder/32/32" />
                            <AvatarFallback>SJ</AvatarFallback>
                          </Avatar>
                          <div>
                            <div className="font-medium">Sarah Johnson</div>
                            <div className="flex items-center gap-2 text-sm text-gray-500">
                              <Mail className="h-3 w-3" />
                              sarah.j@support.com
                            </div>
                            <div className="flex items-center gap-2 text-sm text-gray-500">
                              <Phone className="h-3 w-3" />
                              +1 (555) 123-4567
                            </div>
                          </div>
                        </div>
                      </div>

                      <Separator />

                      {/* Support Status */}
                      <div className="space-y-3">
                        <div className="flex items-center gap-2 text-sm text-gray-600">
                          <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
                          Support Status
                        </div>
                        <Badge className="bg-green-100 text-green-800 hover:bg-green-100">
                          <div className="w-2 h-2 bg-green-600 rounded-full mr-2"></div>
                          Active
                        </Badge>
                      </div>

                      <Separator />

                      {/* Last Updated */}
                      <div className="space-y-3">
                        <div className="flex items-center gap-2 text-sm text-gray-600">
                          <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
                          Last Updated
                        </div>
                        <div className="font-medium">June 3, 2023 - 14:35 PM</div>
                      </div>

                      <Separator />

                      {/* Assigned Date */}
                      <div className="space-y-3">
                        <div className="flex items-center gap-2 text-sm text-gray-600">
                          <Calendar className="h-4 w-4 text-blue-500" />
                          Assigned Date
                        </div>
                        <div className="font-medium">May 28, 2023</div>
                      </div>
                    </CardContent>
                  </Card>

                  {/* Status Timeline */}
                  <Card>
                    <CardHeader>
                      <CardTitle className="text-lg font-semibold">Status Timeline</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <div className="space-y-4">
                        <div className="flex items-start gap-3">
                          <div className="flex items-center justify-center w-6 h-6 bg-green-100 rounded-full">
                            <Check className="h-3 w-3 text-green-600" />
                          </div>
                          <div className="flex-1">
                            <div className="font-medium text-sm">Created</div>
                            <div className="text-xs text-gray-500">May 28, 2023 - 09:12 AM</div>
                          </div>
                        </div>
                        <div className="flex items-start gap-3">
                          <div className="flex items-center justify-center w-6 h-6 bg-green-100 rounded-full">
                            <Check className="h-3 w-3 text-green-600" />
                          </div>
                          <div className="flex-1">
                            <div className="font-medium text-sm">In Progress</div>
                            <div className="text-xs text-gray-500">May 29, 2023 - 11:45 AM</div>
                          </div>
                        </div>
                        <div className="flex items-start gap-3">
                          <div className="flex items-center justify-center w-6 h-6 bg-yellow-100 rounded-full">
                            <Clock className="h-3 w-3 text-yellow-600" />
                          </div>
                          <div className="flex-1">
                            <div className="font-medium text-sm">Active</div>
                            <div className="text-xs text-gray-500">June 3, 2023 - 14:35 PM</div>
                          </div>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </div>

                {/* Right Panel - Conversation Thread */}
                <div className="lg:col-span-2">
                  <Card className="h-full">
                    <CardHeader>
                      <CardTitle className="text-lg font-semibold">Conversation Thread</CardTitle>
                    </CardHeader>
                    <CardContent className="flex flex-col h-full">
                      <div className="flex-1 space-y-6 mb-6">
                        {/* Initial Message */}
                        <div className="flex gap-3">
                          <Avatar className="h-8 w-8">
                            <AvatarImage src="/api/placeholder/32/32" />
                            <AvatarFallback>MC</AvatarFallback>
                          </Avatar>
                          <div className="flex-1">
                            <div className="flex items-center gap-2 mb-2">
                              <span className="font-medium">Michael Chen</span>
                              <Badge variant="secondary" className="text-xs">Society Admin</Badge>
                              <span className="text-xs text-gray-500">May 28, 2023 - 09:12 AM</span>
                            </div>
                            <div className="bg-gray-50 rounded-lg p-3 text-sm">
                              We're experiencing issues with the visitor management system. The QR code scanner at 
                              the gate isn't registering properly and visitors are having trouble getting in. Can 
                              someone look into this as soon as possible?
                            </div>
                          </div>
                        </div>

                        {/* Support Response */}
                        <div className="flex gap-3">
                          <Avatar className="h-8 w-8">
                            <AvatarImage src="/api/placeholder/32/32" />
                            <AvatarFallback>SJ</AvatarFallback>
                          </Avatar>
                          <div className="flex-1">
                            <div className="flex items-center gap-2 mb-2">
                              <span className="font-medium">Sarah Johnson</span>
                              <Badge variant="secondary" className="text-xs">Support Agent</Badge>
                              <span className="text-xs text-gray-500">May 29, 2023 - 11:45 AM</span>
                            </div>
                            <div className="bg-blue-50 rounded-lg p-3 text-sm">
                              <p className="mb-3">Thanks for reporting this issue, Michael. I'll look into the QR scanner problem right away. 
                              Could you please provide some more details:</p>
                              <ul className="list-disc list-inside space-y-1 text-sm">
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
                      <div className="border-t pt-4">
                        <div className="flex items-center gap-2 mb-3">
                          <Button variant="outline" size="sm" className="flex items-center gap-1">
                            Send Message
                            <ChevronDown className="h-3 w-3" />
                          </Button>
                          <div className="flex items-center gap-2">
                            <input type="checkbox" id="internal" className="rounded" />
                            <label htmlFor="internal" className="text-sm text-gray-600">Internal Note</label>
                          </div>
                        </div>

                        {/* Formatting Toolbar */}
                        <div className="flex items-center gap-1 mb-3 p-2 border rounded-t-lg bg-gray-50">
                          <Button variant="ghost" size="sm">
                            <Bold className="h-4 w-4" />
                          </Button>
                          <Button variant="ghost" size="sm">
                            <Italic className="h-4 w-4" />
                          </Button>
                          <Button variant="ghost" size="sm">
                            <Link className="h-4 w-4" />
                          </Button>
                          <Button variant="ghost" size="sm">
                            <List className="h-4 w-4" />
                          </Button>
                          <Button variant="ghost" size="sm">
                            <Paperclip className="h-4 w-4" />
                          </Button>
                        </div>

                        <Textarea
                          placeholder="Type your message here..."
                          value={message}
                          onChange={(e) => setMessage(e.target.value)}
                          className="min-h-[100px] rounded-t-none border-t-0"
                        />

                        <div className="flex items-center justify-between mt-4">
                          <div className="flex gap-2">
                            <Button variant="outline" className="flex items-center gap-2">
                              <AlertTriangle className="h-4 w-4" />
                              Escalate
                            </Button>
                            <Button variant="outline" className="flex items-center gap-2">
                              <Check className="h-4 w-4" />
                              Mark Resolved
                            </Button>
                          </div>
                          <Button className="bg-blue-600 hover:bg-blue-700">
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