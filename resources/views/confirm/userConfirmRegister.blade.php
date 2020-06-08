</html>

<!DOCTYPE html>
<html lang="en">
@include('head.head')

<body>
    <div id="container">
        <div id="menu">
            <img id="logo" src="./assets/image/logo/logo.png" alt="logo">
        </div>
        <div id="content">
            <form action="{{URL::action('StoreAuthController@confirmAccountStore',$id)}}" method="post" enctype="multipart/form-data">
                <h3>{{$data["message_one"]}}</h3>
                <h3>{{$data["message_two"]}}</h3>
                <div id="voucher">
                    <h3>{{$data["voucher"]}}</h3>
                </div>
            </form>
        </div>
    </div>

</body>

</html>