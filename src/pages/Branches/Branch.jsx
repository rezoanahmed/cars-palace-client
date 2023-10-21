import PropTypes from "prop-types"
const Branch = ({data}) => {
    const {branchName, contact, email, address, photo}=data;
    return (
        <div className='flex flex-col md:flex-row justify-center items-center gap-5 p-4 bg-base-100 shadow-lg'>
            <div>
                <img src={photo} alt="" className='h-48 w-48' />
            </div>
            <div>
                <h1 className='text-2xl font-semibold'>{branchName}</h1>
                <p>Contact: {contact}</p>
                <p>E-mail: {email}</p>
                <p>Address: {address}</p>
            </div>
        </div>
    );
};

Branch.propTypes = {
    data: PropTypes.object.isRequired,
}

export default Branch;