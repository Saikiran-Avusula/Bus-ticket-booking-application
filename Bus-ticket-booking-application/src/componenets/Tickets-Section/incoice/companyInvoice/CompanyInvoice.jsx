import { FaPhone } from "react-icons/fa6"


const CompanyInvoice = () => {
    return (
        <div className="w-full col-span-1 border-dashed border-l-2 border-neutral-400 relative">

            <div className="w-full bg-red-500 px-3 py-4 rounded-tr-3xl">
                <h1 className="text-3xl text-white text-neutral-50 font-bold text-center pb-1">
                    Bus Ticket
                </h1>
            </div>

            <div className="w-full px-4 py-7 space-y-1">
                <p className="text-sm text-neutral-600 font-normal">
                    Bill No: 465
                </p>
                <p className="text-sm text-neutral-600 font-normal">
                    Name: Shivaram
                </p>
                <p className="text-sm text-neutral-600 font-normal">
                    Date: 2024-10-31
                </p>
                <p className="text-sm text-neutral-600 font-normal">
                    From Kathmandu <span className="text-xs">(Buspark)</span>
                </p>
                <p className="text-sm text-neutral-600 font-normal">
                    From Pyuthan <span className="text-xs">(Chakchake)</span>
                </p>
                <p className="text-sm text-neutral-600 font-normal">
                    Departure Time: 6:15M
                </p>
                <p className="text-sm text-neutral-600 font-normal">
                    Seat No.: A2, A3, A4, B6
                </p>
                <p className="text-sm text-neutral-600 font-normal">
                    Total Passengers: 04 People Only                </p>

            </div>



            {/* bottom right section */}
            <div className="w-full bg-red-500 absolute bottom-0 right-0 rounded-br-3xl flex items-center justify-center">
                <div className="flex items-center">
                    <FaPhone className='w-3 h-3 text-white' />
                    <p className="text-xs text-neutral-100 font-light px-3 py-2">
                        +91 85234-85647.
                    </p>
                </div>
            </div>
        </div>
    )
}

export default CompanyInvoice
