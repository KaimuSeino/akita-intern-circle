import {
    Sheet,
    SheetContent,
    SheetDescription,
    SheetHeader,
    SheetTitle,
    SheetTrigger
} from "@/components/ui/sheet"
import { TfiAlignLeft } from "react-icons/tfi";

const Navbar = () => {
    return ( 
        <Sheet>
            <SheetTrigger>
                <TfiAlignLeft />
            </SheetTrigger>
            <SheetContent>
                <SheetHeader>
                    <SheetTitle>Are you absolutely sure?</SheetTitle>
                    <SheetDescription>
                        This action cannot be undone. This will permanently delete your account
                        and remove your data from our servers.
                    </SheetDescription>
                    </SheetHeader>
            </SheetContent>
        </Sheet>
     );
}
 
export default Navbar;