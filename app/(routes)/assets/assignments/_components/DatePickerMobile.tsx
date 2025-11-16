import Button from "@/components/ui/Button";
import Form from 'next/form'

const today = new Date().toLocaleDateString("en-CA");


export default function DatePickerMobile(){
    return (
        <Form className="mt-3" action='/assets/assignments'>
            <div className="flex gap-2 flex-col md:flex-row items-start md:items-center">
                <label className="font-semibold">Filter before</label>
   <input max={today} name="date" className="border-2 bg-gray-50 border-violet-500 p-2 rounded mb-1 md:mb-0" type="date" />
   <Button text="Filter date"/>
            </div>
         
        </Form>
    )
}