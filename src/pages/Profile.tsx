import { Eye, Monitor, Smartphone } from "lucide-react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Switch } from "@/components/ui/switch";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

const ProfileSettings = () => {
  return (
    <>
      <div className="container mx-auto py-6 px-4 max-w-4xl">
        {/* Profile Overview Card */}
        <Card className="mb-6">
          <CardHeader>
            <CardTitle>Profile Overview</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="flex flex-col md:flex-row gap-6 items-start">
              <Avatar className="w-24 h-24">
                <AvatarImage
                  src="/avatars/user1.jpg"
                  alt="John Anderson"
                  className="w-full h-full object-cover"
                />
                <AvatarFallback>JA</AvatarFallback>
              </Avatar>

              <div className="w-full space-y-4">
                <div>
                  <label className="text-sm font-medium text-primary block">
                    Full Name
                  </label>
                  <Input defaultValue="John Anderson" className="mt-1" />
                </div>

                <div>
                  <label className="text-sm font-medium text-primary block">
                    Email
                  </label>
                  <Input
                    defaultValue="john.anderson@company.com"
                    className="mt-1"
                  />
                </div>

                <div className="flex items-center gap-3">
                  <span className="px-3 py-1 bg-orange-100 text-orange-600 rounded-md text-sm">
                    Super Admin
                  </span>
                  <Button className="bg-primary hover:bg-accent cursor-pointer">
                    Save Changes
                  </Button>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Change Password Card */}
        <Card className="mb-6">
          <CardHeader>
            <CardTitle>Change Password</CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <div>
              <label className="text-sm font-medium text-primary block">
                Current Password
              </label>
              <div className="relative mt-1">
                <Input type="password" />
                <Eye
                  className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400 cursor-pointer"
                  size={18}
                />
              </div>
            </div>

            <div>
              <label className="text-sm font-medium text-primary block">
                New Password
              </label>
              <div className="relative mt-1">
                <Input type="password" />
                <Eye
                  className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400 cursor-pointer"
                  size={18}
                />
              </div>
            </div>

            <div>
              <label className="text-sm font-medium text-primary block">
                Confirm New Password
              </label>
              <div className="relative mt-1">
                <Input type="password" />
                <Eye
                  className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400 cursor-pointer"
                  size={18}
                />
              </div>
            </div>

            <div>
              <Button className="bg-primary hover:bg-accent cursor-pointer">
                Update Password
              </Button>
            </div>
          </CardContent>
        </Card>

        {/* Security Card */}
        <Card>
          <CardHeader>
            <CardTitle>Security</CardTitle>
          </CardHeader>
          <CardContent className="space-y-6">
            <div className="flex justify-between items-center">
              <div>
                <h3 className="font-medium">Two-Factor Authentication</h3>
                <p className="text-sm text-gray-500">
                  Add an extra layer of security to your account
                </p>
              </div>
              <Switch />
            </div>

            <div>
              <h3 className="font-medium mb-3">Recent Login Activity</h3>

              <div className="space-y-3">
                <div className="flex items-center gap-3">
                  <Monitor size={20} className="text-gray-600" />
                  <div>
                    <p className="font-medium">Windows 11 · Chrome</p>
                    <p className="text-sm text-gray-500">
                      Last active: Today at 10:24 AM
                    </p>
                  </div>
                </div>

                <div className="flex items-center gap-3">
                  <Smartphone size={20} className="text-gray-600" />
                  <div>
                    <p className="font-medium">iPhone 14 Pro · Safari</p>
                    <p className="text-sm text-gray-500">
                      Last active: Yesterday at 4:30 PM
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </>
  );
};

export default ProfileSettings;
