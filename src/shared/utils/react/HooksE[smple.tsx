interface myHooksI {
    title: string
}

function myHooks({ title }: myHooksI) {
    React.useEffect(() => {
        console.log('Mount');
        console.log('WillUpdate');

    })

    React.useEffect(() => {
        console.log('DidMount');


        return ()=>{
            console.log('componentWillUnmount');
            
        }
    }, [])

    React.useEffect(() => {
        console.log('compWillReceiveProps');

    }, [title])

    return (
        <div>{title}</div>
    )
}