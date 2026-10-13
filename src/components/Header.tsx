interface IProps {

}


const Header = (props: IProps) => {
    return (
        <div className="w-full fixed top-0">
            <div className="flex justify-between items-center py-4 bg-[#06001e] border-b border-blue-900 text-gray-200">
                <div className="flex gap-16 px-4">
                    <div>LOGO</div>
                    <div>Page</div>
                    <div>Page</div>
                    <div>Page</div>
                    <div>Page</div>
                </div>
                <div className="flex gap-16 px-4">
                    <div>Page</div>
                    <div>Page</div>
                </div>
            </div>
        </div>
    )

}

export default Header;