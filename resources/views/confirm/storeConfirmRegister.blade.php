<!DOCTYPE html>
<html lang="en">
@include('head.head')

<body>
    <div id="container">
        <div id="menu">
            <img id="logo" src='https://drive.google.com/uc?export=view&id=1JHJ5wLLpQfZJ1WXjeGgE-bZa6YzF_ipl' alt="logo">
        </div>
        <div id="content">
            <form action="{{URL::action('UserAuthController@confirmAccountUser',$id)}}" method="post" enctype="multipart/form-data">
                <h3>{{$data["message_one"]}}</h3>
                <h3>{{$data["message_two"]}}</h3>
            </form>
        </div>
    </div>

</body>