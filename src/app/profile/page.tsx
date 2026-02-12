import { Card, CardBody, User } from "@nextui-org/react";

export default function Profile() {
  return (
    <Card className="mx-auto mt-4 max-w-md">
      <CardBody className="space-y-3">
        <User
          name="Your Name"
          description="Connect this page to your Express backend to load real profile data."
          avatarProps={{
            showFallback: true,
            src: "",
          }}
        />
        <p className="text-default-500">
          Authentication has been removed from the starter. Once your API is
          ready, swap in data from your own auth/session endpoints here.
        </p>
      </CardBody>
    </Card>
  );
}
