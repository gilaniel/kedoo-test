import {
  Button,
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  Input,
} from '@kedoo/kids/ui-components';

export const SubscribeModal = ({
  isOpen,
  onOpenChange,
}: {
  isOpen: boolean;
  onOpenChange: (state: boolean) => void;
}) => {
  return (
    <Dialog open={isOpen} onOpenChange={onOpenChange}>
      <DialogContent
        aria-describedby={undefined}
        className="rounded-[40px] [&>button]:top-0 [&>button]:right-0 p-10 kids-text-blue max-w-[350px] font-sniglet"
      >
        <DialogHeader>
          <DialogTitle></DialogTitle>
        </DialogHeader>
        <div className="flex flex-col gap-5">
          <p className="kids-h3">Stay up to date</p>
          <p>Enter your name and email to see the details and get the latest updates from us.</p>
          <Input placeholder="Enter your name" label="Name" />
          <Input placeholder="Enter your email" label="Email" />
          <div className="flex gap-4">
            <Button variant="outline" className="basis-1/2" onClick={() => onOpenChange(false)}>
              Cancel
            </Button>
            <Button className="basis-1/2">Submit</Button>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
};
