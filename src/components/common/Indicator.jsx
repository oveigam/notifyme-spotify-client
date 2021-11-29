
const Indicator = ({ success }) => {
    return (
        <div
            style={{
                width: 25,
                height: 25,
                borderRadius: '100%',
                backgroundColor: success ? 'green' : 'red'
            }}
        />
    );
}

export default Indicator;