$(document).ready(function(){
                
    /*############################ TOPIC STARTS ############################*/
    //Adding a new topic 
    $("#create_topic_btn").on('click', function(){
        let html = `
                    <div class="topic shadow border p-3 mt-5 mb-4">
                        <div class="lessEntireTopic" style="display: none;">
                            <span class="setTopicValue d-block"></strong> </span>
                            <span aria-hidden="true" class="topicShowMoreBtn text-muted">Show more</span>
                        </div>
                        <div class="entire_topic">
                            <div class="mb-4">
                                <button type="button" class="btn-close float-end trashTopicBtn">
                                    <span aria-hidden="true">×</span>
                                </button>                                                                  
                                <span aria-hidden="true" class="topicShowLessBtn text-muted">Show Less</span>
                            </div>

                            <div class="d-flex align-items-start justify-content-between">
                                <h5 class="text-muted"><strong>Topic: </strong> </h5>

                            </div>
                            <div class="form-group mb-4">
                                <input type="text" name="topic" value="Introduction"
                                    class="form-control topicInput">
                            </div>
                            <div class="sortable topic_contents_container">
                                
                            </div>
                            <div class="add-content addContentBtnContainer mt-5">
                                <span class="addLessonBtn text-muted"><i class="fa fa-plus"></i> Lesson</span>
                                <span class="addQuizBtn text-muted"><i class="fa fa-plus"></i> Quiz</span>
                                <span class="addAssignmentBtn text-muted"><i class="fa fa-plus"></i>
                                    Assignment</span>
                            </div>
                        </div>
                    </div>
                `;
        $('#topics').append(html);
        $('.topic').find('.setTopicValue').html(`<strong>Topic: </strong>`);
    })

     //display topic input value on another div
     $('.topic').find('.setTopicValue').html(`<strong>Topic: </strong>`);
     $('body').on('keyup', '.topicInput', function(){
        var inputValue = $(this).val();
       var targetElement =  $(this).parents('.topic').find('.setTopicValue');
       if(inputValue != ''){
            targetElement.html(`<strong>Topic: </strong> ${inputValue}`);
       }else if(inputValue == ''){
            targetElement.html(`<strong>Topic: </strong>`);
       }
       
    })

    //Topic area show less and show more
    $('body').on('click', '.topicShowMoreBtn', function(){
        let parent = $(this).parents('.lessEntireTopic');
        parent.fadeOut(300);

        parent.siblings('.entire_topic').delay(300).fadeIn(300);
    });

    $('body').on('click', '.topicShowLessBtn', function(){
        let parent = $(this).parents('.entire_topic');
        parent.fadeOut(300);

        parent.siblings('.lessEntireTopic').delay(300).fadeIn(300);
    })


    //To remove a topic from the DOM
    $('body').on('click', '.trashTopicBtn', function () {
        __this = $(this);
        swal({
            title: "Are you sure?",
            text: "You will not be able to recover this Resource!",
            type: "warning",
            showCancelButton: true,
            confirmButtonClass: "btn-danger",
            confirmButtonText: "Delete",
            cancelButtonText: "Cancel",
            closeOnConfirm: false,
            closeOnCancel: true
        },
            function (isConfirm) {
                if (isConfirm) {
                    __this.parents('.topic').remove();
                    swal("Deleted!", "Resource has been deleted.", "success");
                }
            });
    });

    /*############################ TOPIC ENDS ############################*/

    /*############################ LEESSON STARTS ############################*/
    //Adding a new lesson
    $('body').on('click', '.addLessonBtn', function(){
        html = ` 
                <div class="lesson border mb-3 p-3 card-draggable">
                    <div class="lessEntireLesson" style="display: none;">
                        <span class="setLessonValue d-block"></strong>  </span>
                        <span aria-hidden="true" class="text-muted lessonShowMoreBtn">Show more</span>
                    </div>
                    <div class="entire_lesson">
                        <div class="mb-4">
                            <button type="button" class="btn-close float-end trashLessonBtn" >
                                <span aria-hidden="true">×</span>
                            </button>
                            <span aria-hidden="true" class="text-muted lessonShowLessBtn">Show Less</span>
                        </div>
                        <div class="form-group">
                            <label for="">Lesson:</label>
                            <input type="text" value="" placeholder="Enter lesson title" class="form-control lessonInput">
                        </div>
                        <div class="row">
                            <div class="col-12">
                                <div class="form-group">
                                    <label for="">Note/Textual Lesson</label>
                                    <textarea name="" class="summernote" cols="30" rows="5" class="form-control"></textarea>
                                </div>
                            </div>
                            <div class="col-md-6 mt-3">
                                <div class="form-group">
                                    <label for="">Video Source</label>
                                    <select name="lesson_video_type" id="" class="form-control lesson_video_type">
                                        <option value="">Select</option>
                                        <option value="embed" selected>Embed Video</option>
                                        <option value="upload">Upoload Video</option>
                                    </select>
                                </div>
                            </div>
                        </div>
                        <div class=" border">
                            <div class="p-3 embed_video">
                                <div class="row">
                                    <div class="col-md-6">
                                        <div class="form-group">
                                            <input type="url" name="" class="form-control embedUrl" placeholder="Paste Embed URL">
                                            <button type="button" class="btn btn-light-green mt-3 loadEmbedVideo">Preview</button>
                                        </div>
                                    </div>
                                    <div class="col-md-6">
                                        <iframe class="previewEmbedVideo" src="" frameborder="1" class="border" width="100%" height="auto"></iframe>
                                    </div>
                                </div>
                            </div>
                            <div class="p-3 d-none upload_video">
                                <div class="row">
                                    <div class="col-md-6">
                                        <div class="form-group">
                                            <input type="file" accept="video/*" name="" class="form-control videoUploadInput">
                                        </div>
                                    </div>
                                    <div class="col-md-6">
                                        <video class="previewVideoUpload"  class="border" width="100%" height="auto" controls ></video>
                                    </div>
                                </div>
                            </div>
                            
                        </div>
                        <div class="p-3 mt-3 attachment">
                            <label for="">Attach files (Optional)<span class="text-danger"> pdf, doc, xlsx, sql, txt</span></label>
                            <input type="file" accept=".pdf, .sql, .doc, .docx, txt, xls, .xlsx" name="files[]"  class="form-control attached_files" multiple>
                            <div class="attached_file_list mt-2">

                            </div>
                        </div>
                    </div>
                    
                </div>
            
        `;
        $(this).parents('.topic').find('.topic_contents_container').append(html);
        $('.lesson').find('.setLessonValue').html(`<strong>Lesson: </strong>`);
        $('.summernote').summernote();
        $(".sortable").sortable({
            connectWith: '.sortable',
            items: '.card-draggable',
            revert: true,
            placeholder: 'card-draggable-placeholder',
            forcePlaceholderSize: true,
            opacity: 0.77,
            cursor: 'move'
        });
    })

    //To delete a lesson 
    $('body').on('click', '.trashLessonBtn', function () {
        __this = $(this);
        swal({
            title: "Are you sure?",
            text: "You will not be able to recover this Resource!",
            type: "warning",
            showCancelButton: true,
            confirmButtonClass: "btn-danger",
            confirmButtonText: "Delete",
            cancelButtonText: "Cancel",
            closeOnConfirm: false,
            closeOnCancel: true
        },
            function (isConfirm) {
                if (isConfirm) {
                    __this.parents('.lesson').remove();
                    swal("Deleted!", "Resource has been deleted.", "success");
                }
            });
    });


    //Preview embeded video on iframe
    $('body').on('click', '.loadEmbedVideo', function(){
        var embedUrl = $(this).parents('.lesson').find('.embedUrl').val();
        $(this).parents('.lesson').find('.previewEmbedVideo').attr('src', embedUrl);
    })

    //Preview Uploaded video on video tag
    $('body').on('change', '.videoUploadInput', function(){
        var video = $(this).parents('.lesson').find('.previewVideoUpload')[0];
        var file = $(this).parents('.lesson').find('.videoUploadInput')[0].files[0];
        var objectURL = URL.createObjectURL(file);
        video.src = objectURL;
        video.play();
    });


    //Toggling lesson type
    $('body').on('change', '.lesson_video_type', function(){
        if($(this).val() == 'embed'){
            $(this).parents('.lesson').find('.embed_video').removeClass('d-none');
            $(this).parents('.lesson').find('.upload_video').addClass('d-none');
        }else if($(this).val() == 'upload'){
            $(this).parents('.lesson').find('.embed_video').addClass('d-none');
            $(this).parents('.lesson').find('.upload_video').removeClass('d-none');
        }
    })


    //Load attached files 
    $('body').on('change', '.attached_files', function(){
       var fileList = $(this).parents('.lesson').find('.attached_file_list');
       fileList.empty();

       var files = this.files;

       for (var i = 0; i < files.length; i++){
        var file = files[i];
        var fileName = file.name;
        var fileExtension = fileName.split('.').pop();

        var iconClass = "fa fa-file";

        if(fileExtension == 'pdf'){
            iconClass = "fa fa-file-pdf";
        }else if(fileExtension == 'txt'){
            iconClass = "fa fa-file-alt";
        }else if(fileExtension == "sql"){
            iconClass = "fa fa-database";
        }else if(fileExtension == 'doc' || fileExtension == 'docx'){
            iconClass = "fa fa-file-word";
        }else if(fileExtension == 'xls' || fileExtension == 'xlsx'){
            iconClass = "fa fa-file-excel";
        }else{
            alert("Please remove unsupported file and try again!");
            return false;
        }

        var fileDiv = $("<a href='javascript:;' class='d-block'>").addClass('file-entry');
        var fileIcon = $("<i>").addClass(iconClass);
        var fileNameElement = $("<span> ").text(fileName);
        
            fileDiv.append(fileIcon);
            fileDiv.append(fileNameElement);
            fileList.append(fileDiv);

       }
    });

    //display lesson input value on another div
    $('.lesson').find('.setLessonValue').html(`<strong>Lesson: </strong>`);
    $('body').on('keyup', '.lessonInput', function(){
        var inputValue = $(this).val();
       var targetElement =  $(this).parents('.lesson').find('.setLessonValue');
       
       if(inputValue != ''){
            targetElement.html(`<strong>Lesson: </strong> ${inputValue}`);
       }else if(inputValue == ''){
            targetElement.html(`<strong>Lesson: </strong>`);
       }
    })

    //Lesson area show less and show more
    $('body').on('click', '.lessonShowMoreBtn', function(){
        let parent = $(this).parents('.lessEntireLesson');
        parent.fadeOut(300);

        parent.siblings('.entire_lesson').delay(300).fadeIn(300);
    });

    $('body').on('click', '.lessonShowLessBtn', function(){
        let parent = $(this).parents('.entire_lesson');
        parent.fadeOut(300);

        parent.siblings('.lessEntireLesson').delay(300).fadeIn(300);
    })
    /*############################ LEESSON ENDS ############################*/


   

    /*############################ QUIZ STARTS ############################*/
  
     //display lesson input value on another div
     $('.quiz').find('.setQuizValue').html(`<strong>Quiz: </strong>`);
    $('body').on('keyup', '.quizInput', function(){
        var inputValue = $(this).val();
       var targetElement =  $(this).parents('.quiz').find('.setQuizValue');
       if(inputValue != ''){
            targetElement.html(`<strong>Quiz: </strong> ${inputValue}`);
       }else if(inputValue == ''){
            targetElement.html(`<strong>Quiz: </strong>`);
       }
       
    })
    
    //Quiz area show less and show more
     $('body').on('click', '.quizShowMoreBtn', function(){
        let parent = $(this).parents('.lessEntireQuiz');
        parent.fadeOut(300);

        parent.siblings('.entire_quiz').delay(300).fadeIn(300);
    });

    $('body').on('click', '.quizShowLessBtn', function(){
        let parent = $(this).parents('.entire_quiz');
        parent.fadeOut(300);

        parent.siblings('.lessEntireQuiz').delay(300).fadeIn(300);
    });

    //Add quiz
    $('body').on('click', '.addQuizBtn', function(){
        let html = `
            <div class="quiz border mb-3 p-3 card-draggable">
                <div class="lessEntireQuiz" style="display: none;">
                    <span class="setQuizValue d-block"></strong>  </span>
                    <span aria-hidden="true" class="text-muted quizShowMoreBtn">Show more</span>
                </div>
                <div class="entire_quiz">
                    <div class="mb-4">
                        <button type="button" class="btn-close float-end trashQuizBtn" >
                            <span aria-hidden="true">×</span>
                        </button>
                        <span aria-hidden="true" class="text-muted quizShowLessBtn">Show Less</span>
                    </div>
                    <div class="form-group">
                        <label for="">Quiz:</label>
                        <input type="text" value="" placeholder="Enter quiz title" class="form-control quizInput">
                    </div>
                    <div class="quizQuestionContainer p-3">
                    </div>
                    <div class="add-content">
                        <span class="addQuizQuestionBtn text-muted"><i class="fa fa-plus"></i> Question</span>
                    </div> 
                </div>
            </div>
            
        `;
        $(this).parents('.topic').find('.topic_contents_container').append(html);
        $('.quiz').find('.setQuizValue').html(`<strong>Quiz: </strong>`);
        $(".sortable").sortable({
            connectWith: '.sortable',
            items: '.card-draggable',
            revert: true,
            placeholder: 'card-draggable-placeholder',
            forcePlaceholderSize: true,
            opacity: 0.77,
            cursor: 'move'
        });
    });


      //To delete a quiz 
      $('body').on('click', '.trashQuizBtn', function () {
        __this = $(this);
        swal({
            title: "Are you sure?",
            text: "You will not be able to recover this Resource!",
            type: "warning",
            showCancelButton: true,
            confirmButtonClass: "btn-danger",
            confirmButtonText: "Delete",
            cancelButtonText: "Cancel",
            closeOnConfirm: false,
            closeOnCancel: true
        },
            function (isConfirm) {
                if (isConfirm) {
                    __this.parents('.quiz').remove();
                    swal("Deleted!", "Resource has been deleted.", "success");
                }
            });
    });


    //Add quiz question
    $('body').on('click', '.addQuizQuestionBtn', function(){
        let questionList = $('.quiz__question');
        
        let totalQuestionList = questionList.length;
        
        let questionNo =  totalQuestionList + 1 ;


        let html = `
            <div class="row quiz__question mt-3">
                <div class="col-12">
                    <label for=""><b>Question <span class="q_no">${questionNo}</span></b></label>
                    <input type="text" name="quizQuestion" placeholder="Enter question" class="form-control quizQuestionInput">
                    <div class="quizAnswerContainer mt-3">
                        <div class="row">
                            <div class="col-md-6 option mt-3">
                                <label for="" class="A">Option: A  </label>
                                <input type="text" class="form-control" placeholder="Enter option  A">
                            </div>
                            <div class="col-md-6 option mt-3">
                                <label for="" class="B">Option: B </label>
                                <input type="text" class="form-control" placeholder="Enter option B">
                            </div>
                            <div class="col-md-6 option mt-3">
                                <label for="" class="C">Option: C </label>
                                <input type="text" class="form-control" placeholder="Enter option C">
                            </div>
                            <div class="col-md-6 option mt-3">
                                <label for="" class="D">Option: D </label>
                                <input type="text" class="form-control" placeholder="Enter option D">
                            </div>
                            <div class="col-md-4">
                                <div class="form-group mt-4">
                                    <label for="">Select correct answer</label>
                                    <select  name="correct_anser" class="form-control correct_answer">
                                        <option value="">Select anser</option>
                                        <option value="A"> A </option>
                                        <option value="B"> B </option>
                                        <option value="C"> C </option>
                                        <option value="D"> D </option>
                                    </select>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
           
        `;

        $(this).parents('.entire_quiz').find('.quizQuestionContainer').addClass('border').addClass('mb-5').append(html);
        
    });


    //Mark correct option
    $('body').on('change', '.correct_answer', function(){
        value = $(this).val();

        var correctLabel = $(this).parents('.quizAnswerContainer').find(`.${value}`);
        correctLabel.append(`<span class="text-success">(<i class="fa fa-check">)</span></i>`);
        correctLabel.siblings('input').addClass('correct-answer');

        var incorrectLabel = correctLabel.parent('.option').siblings('.option').children('label');
        incorrectLabel.children('span').remove();
        incorrectLabel.siblings('input').removeClass('correct-answer');
    });

    /*############################ QUIZ ENDS ############################*/


    /*############################ ASSIGNMENT STARTS ############################*/

     //display lesson input value on another div
     $('.assignment').find('.setAssignmentValue').html(`<strong>Assignment: </strong>`);
    $('body').on('keyup', '.assignmentInput', function(){
        var inputValue = $(this).val();
       var targetElement =  $(this).parents('.assignment').find('.setAssignmentValue');
       if(inputValue != ''){
            targetElement.html(`<strong>Assignment: </strong> ${inputValue}`);
       }else if(inputValue == ''){
            targetElement.html(`<strong>Assignment: </strong>`);
       }
       
    })
    
    //Assignemnt area show less and show more
     $('body').on('click', '.assignmentShowMoreBtn', function(){
        let parent = $(this).parents('.lessEntireAssignment');
        parent.fadeOut(300);

        parent.siblings('.entire_assignment').delay(300).fadeIn(300);
    });

    $('body').on('click', '.assignmentShowLessBtn', function(){
        let parent = $(this).parents('.entire_assignment');
        parent.fadeOut(300);

        parent.siblings('.lessEntireAssignment').delay(300).fadeIn(300);
    });

    //Add Assignment
    $('body').on('click', '.addAssignmentBtn', function(){
        let html = `
                <div class="assignment border mb-3 p-3 card-draggable">
                    <div class="lessEntireAssignment" style="display: none;">
                        <span class="setAssignmentValue d-block"></strong>  </span>
                        <span aria-hidden="true" class="text-muted assignmentShowMoreBtn">Show more</span>
                    </div>
                    <div class="entire_assignment">
                        <div class="mb-4">
                            <button type="button" class="btn-close float-end trashAssignmentBtn" >
                                <span aria-hidden="true">×</span>
                            </button>
                            <span aria-hidden="true" class="text-muted assignmentShowLessBtn">Show Less</span>
                        </div>
                        <div class="form-group">
                            <label for="">Assignment:</label>
                            <input type="text" value="" placeholder="Enter assignment title" class="form-control assignmentInput">
                        </div>
                        <div class="form-group">
                            <textarea name="" id="" class="summernote">Enter assignment here....</textarea>
                        </div>
                    </div>
                </div>
        `;
        $(this).parents('.topic').find('.topic_contents_container').append(html);
        $('.assignment').find('.setAssignmentValue').html(`<strong>Assignment: </strong>`);
        $('.summernote').summernote();
        $(".sortable").sortable({
            connectWith: '.sortable',
            items: '.card-draggable',
            revert: true,
            placeholder: 'card-draggable-placeholder',
            forcePlaceholderSize: true,
            opacity: 0.77,
            cursor: 'move'
        });
    });

     //To delete an assignment
     $('body').on('click', '.trashAssignmentBtn', function () {
        __this = $(this);
        swal({
            title: "Are you sure?",
            text: "You will not be able to recover this Resource!",
            type: "warning",
            showCancelButton: true,
            confirmButtonClass: "btn-danger",
            confirmButtonText: "Delete",
            cancelButtonText: "Cancel",
            closeOnConfirm: false,
            closeOnCancel: true
        },
            function (isConfirm) {
                if (isConfirm) {
                    __this.parents('.assignment').remove();
                    swal("Deleted!", "Resource has been deleted.", "success");
                }
            });
    });


    /*############################ ASSIGNMENT ENDS ############################*/


     /*############################ LANDING PAGE STARTS ############################*/
    
     $('body').on('change', '#introvideoinput', function(){
        let uploadOutput = $('#introvideouploadoutput');
        uploadOutput.removeClass('d-none');
        var video = $('#introvideouploadoutput')[0];
        var file = $('#introvideoinput')[0].files[0];
        var objectURL = URL.createObjectURL(file);
        video.src = objectURL;
        video.play();
    });

    $('body').on('click', '#loadEmbedIntroVideoBtn', function(){
        let embedOutput = $('#introvideoembedoutput');
        let introVideoOutput = $('#introVideoOutput');
        introVideoOutput.removeClass('d-none');

        let input = $(this).siblings('#embedIntroVideoInput').val();

        embedOutput.attr('src', input);
    });

    $('body').on('change', '#introVideoType', function(){
        
        let videoType = $(this).val();
        let upload = $('.uploadIntroVideo');
        let embded = $('.embedIntroVideo');

        let uploadOutput = $('#introvideouploadoutput');
        let embedOutput = $('#introvideoembedoutput');
        let introVideoOutput = $('#introVideoOutput');

        if(videoType == 'embed'){
            upload.addClass('d-done');
            embded.removeClass('d-none');

            
            uploadOutput.addClass('d-none');
            embedOutput.removeClass('d-none');

            let input = $('#embedIntroVideoInput').val();

            embedOutput.attr('src', input);

        } else if(videoType == 'upload'){
            upload.removeClass('d-none');
            embded.addClass('d-none');

            introVideoOutput.removeClass('d-none');
            
            embedOutput.addClass('d-none');

        }


    })
    
    /*############################ LANDING PAGE ENDS ############################*/



    $('body').on('click', '.course-link', function(){

        let dataType = $(this).data('type'); 
        let dataUrl = $(this).data('url');
        let dataText = $(this).text();
        let video = ` <video  src="${dataUrl}" autoplay class="w-100" controls></video>`;
        let course_material = `<a href="${dataUrl}" target="_blank" class="btn btn-green">${dataText}</a>`;
        let assignment = `<button class="btn btn-green" data-bs-target="#preview_assignment_modal" data-bs-toggle="modal">${dataText}</button>`;
        let quiz = `<button class="btn btn-green" data-bs-target="#preview_start_quiz_modal" id="preview_start_quiz_btn" data-bs-toggle="modal">${dataText}</button>`;

        let style = {
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                height: '50vh',
                width: '100%'
            }


        if(dataType == 'lesson'){
            $('#course_board').html(video);

        }else if(dataType == 'material'){
            $('#course_board').html(course_material).css(style);    

        }else if(dataType == 'assignment'){
            $('#course_board').html(assignment).css(style);  

        }else if(dataType == 'quiz'){
            $('#course_board').html(quiz).css(style);  
        }  
        $(this).parent('.custom-control').addClass('bg-light');
        $(this).parents('.col-12').siblings('.col-12').find('.custom-control').removeClass('bg-light');
        $(this).parents('.card-body').parent('.collapse').parent('.card').siblings('.card').find('.custom-control').removeClass('bg-light');
    })


    //Next and Previous Lesson Navigation 
    var $course_links = $('#course-content-preview-container').find('.course-link');
    var current_link = 0;

    var current_course_link = $course_links.eq(current_link).data('url');
    $('#course-preview-container').find('video').attr('src', current_course_link);
    
    if(current_link <= 0){
        $('#prev_video').addClass('d-none');
    }

    //Loading the first content to the course board
    let dataText = $course_links.eq(current_link).text();
    let dataType = $course_links.eq(current_link).data('type');

    let video = ` <video  src="${current_course_link}" autoplay class="w-100" controls></video>`;
    let course_material = `<a href="${current_course_link}" target="_blank" class="btn btn-green">${dataText}</a>`;
    let assignment = `<button class="btn btn-green" data-bs-target="#preview_assignment_modal" data-bs-toggle="modal">${dataText}</button>`;
    let quiz = `<button class="btn btn-green" data-bs-target="#preview_start_quiz_modal" id="preview_start_quiz_btn" data-bs-toggle="modal">${dataText}</button>`;
    let style = {
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            height: '50vh',
            width: '100%'
        }

        if (dataType == 'lesson') {
            $('#course_board').html(video);

        } else if (dataType == 'material') {
            $('#course_board').html(course_material).css(style);

        } else if (dataType == 'assignment') {
            $('#course_board').html(assignment).css(style);

        } else if (dataType == 'quiz') {
            $('#course_board').html(quiz).css(style);
        }  
        $course_links.eq(current_link).parent('.custom-control').addClass('bg-light');
        $course_links.eq(current_link).parents('.col-12').siblings('.col-12').find('.custom-control').removeClass('bg-light');
        $course_links.eq(current_link).parents('.card-body').parent('.collapse').parent('.card').siblings('.card').find('.custom-control').removeClass('bg-light');




        console.log(current_link); 


    //Next video event handling
    $('body').on('click', '#next_video', function(){
        current_link = (current_link + 1);
        current_course_link = $course_links.eq(current_link).data('url');
        let dataText = $course_links.eq(current_link).text();
        let dataType = $course_links.eq(current_link).data('type');

        let video = ` <video  src="${current_course_link}" autoplay class="w-100" controls></video>`;
        let course_material = `<a href="${current_course_link}" target="_blank" class="btn btn-green">${dataText}</a>`;
        let assignment = `<button class="btn btn-green" data-bs-target="#preview_assignment_modal" data-bs-toggle="modal">${dataText}</button>`;
        let quiz = `<button class="btn btn-green" data-bs-target="#preview_start_quiz_modal" id="preview_start_quiz_btn" data-bs-toggle="modal">${dataText}</button>`;
        let style = {
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                height: '50vh',
                width: '100%'
            }
            console.log(current_link); 

        if(current_link < $course_links.length - 1){
            if (dataType == 'lesson') {
                $('#course_board').html(video);

            } else if (dataType == 'material') {
                $('#course_board').html(course_material).css(style);

            } else if (dataType == 'assignment') {
                $('#course_board').html(assignment).css(style);

            } else if (dataType == 'quiz') {
                $('#course_board').html(quiz).css(style);
            }  
            
        }else if(current_link == $course_links.length - 1){
            $(this).addClass('d-none');
        }

        if(current_link > 0){
        $('#prev_video').removeClass('d-none');
    }
       
       $course_links.eq(current_link).parent('.custom-control').addClass('bg-light');
       $course_links.eq(current_link).parents('.col-12').siblings('.col-12').find('.custom-control').removeClass('bg-light');
       $course_links.eq(current_link).parents('.card-body').parent('.collapse').parent('.card').siblings('.card').find('.custom-control').removeClass('bg-light');
    });

    //Previous Video event handling
    $('body').on('click', '#prev_video', function(){
        current_link = (current_link - 1);

        if(current_link < 0){
            current_link == 0;
        }

        if(current_link == 0){
            $(this).addClass('d-none');
        }

        current_course_link = $course_links.eq(current_link).data('url');


        let dataText = $course_links.eq(current_link).text();
        let dataType = $course_links.eq(current_link).data('type');

        let video = ` <video  src="${current_course_link}" autoplay class="w-100" controls></video>`;
        let course_material = `<a href="${current_course_link}" target="_blank" class="btn btn-green">${dataText}</a>`;
        let assignment = `<button class="btn btn-green" data-bs-target="#preview_assignment_modal" data-bs-toggle="modal">${dataText}</button>`;
        let quiz = `<button class="btn btn-green" data-bs-target="#preview_start_quiz_modal" id="preview_start_quiz_btn" data-bs-toggle="modal">${dataText}</button>`;
        let style = {
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                height: '50vh',
                width: '100%'
            }

        
        
        if(current_link >= 0){

            if (dataType == 'lesson') {
                $('#course_board').html(video);

            } else if (dataType == 'material') {
                $('#course_board').html(course_material).css(style);

            } else if (dataType == 'assignment') {
                $('#course_board').html(assignment).css(style);

            } else if (dataType == 'quiz') {
                $('#course_board').html(quiz).css(style);
            }  

        }

        if(current_link < $course_links.length){
            $('#next_video').removeClass('d-none');
        }

        $course_links.eq(current_link).parent('.custom-control').addClass('bg-light');
       $course_links.eq(current_link).parents('.col-12').siblings('.col-12').find('.custom-control').removeClass('bg-light');
       $course_links.eq(current_link).parents('.card-body').parent('.collapse').parent('.card').siblings('.card').find('.custom-control').removeClass('bg-light');
       
    });


    /*############################ COUNTDOWN TIMER STARTS ############################*/

    $('body').on('click', '.start_quiz_btn', function () {
        if ($.trim($('#countdown').text()) === '' ) {
            //Set the quiz duration in seconds
            var quizDuration = 15 * 60;

            //Calculate the target time
            var targetTime = new Date().getTime() + quizDuration * 1000;

            //Update the countdown every second
            setInterval(() => {
                var currentTime = new Date().getTime();

                //calculate the remaining time
                var remainingTime = Math.max(0, Math.floor((targetTime - currentTime) / 1000));

                //calculate minutes and seconds
                var minutes = Math.floor(remainingTime / 60);
                var seconds = remainingTime % 60;
                if (seconds <= 9) {
                    seconds = "0" + seconds;
                }
                if (minutes <= 9) {
                    minutes = "0" + minutes;
                }

                //Display the countdown
                $('#countdown').html(`Time Left: ${minutes}m : ${seconds}s`);

                //check if the quiz is has ended
                if (remainingTime <= 0) {
                    clearInterval(countdown);
                    $('#countdown').html("Quiz time is up!");
                }

            }, 1000);

        }

        $('#preview_start_quiz_btn').attr('data-bs-target', '#preview_quiz_modal');


    });

    /*############################ COUNTDOWN TIMER ENDS ############################*/


    /*############################ QUIZ TAB STARTS ############################*/

    let currentTab = 0;
    const $tabs = $('.quiz-tab-content');
    
    
    //show the inital tab
    $tabs.eq(currentTab).fadeIn();

    $('#next-tab').on('click', function(){
        if (currentTab < $tabs.length - 1) {
           
            let checkedR = $('.quiz-tab-content').find('.rdio:checked');

            let num = ((checkedR.length - 1) / ($tabs.length - 1)) * 100;
            progressClass = progress(num);

            $('.quiz_progress').addClass(`${progressClass}`);


            //Fade out the current tab
            $tabs.eq(currentTab).fadeOut();

            currentTab = (currentTab + 1);

            //show the next tab
            $tabs.eq(currentTab).delay(300).fadeIn(300);
        }
        if(currentTab == $tabs.length - 1){
            $(this).text('Submit').attr('id', 'submit-quiz');
        }

        if(currentTab > 0){
            $(this).siblings('#prev-tab').removeAttr('disabled');
        }

    });


    $('#prev-tab').on('click', function(){
        // if (currentTab < $tabs.length - 1) {

            //Fade out the current tab
            $tabs.eq(currentTab).fadeOut();

            currentTab = (currentTab - 1);

            //show the next tab
            $tabs.eq(currentTab).delay(300).fadeIn(300);
        // }
        
            $(this).siblings('#submit-quiz').attr('id', 'next-tab').text('Next');
        

        if(currentTab <= 0){
            $(this).prop('disabled', true);
        }

    });

    //Calculate the progress
    function progress($value){
        if($value <=  5){
            return 'wd-5p';
        }
        if($value <= 10){
            return 'wd-10p';
        }
        if($value <= 15){
            return 'wd-15p';
        }
        if($value <= 20){
            return 'wd-20p';
        }
        if($value <= 25){
            return 'wd-25p';
        }
        if($value <= 30){
            return 'wd-30p';
        }
        if($value <= 35){
            return 'wd-35p';
        }
        if($value <= 40){
            return 'wd-40p';
        }
        if($value <= 45){
            return 'wd-45p';
        }
        if($value <= 50){
            return 'wd-50p';
        }
        if($value <= 55){
            return 'wd-55p';
        }
        if($value <= 60){
            return 'wd-60p';
        }
        if($value <= 65){
            return 'wd-65p';
        }
        if($value <= 70){
            return 'wd-70p';
        }
        if($value <= 75){
            return 'wd-75p';
        }
        if($value <= 80){
            return 'wd-80p';
        }
        if($value <= 85){
            return 'wd-85p';
        }
        if($value <= 90){
            return 'wd-90p';
        }
        if($value <= 95){
            return 'wd-95p';
        }
        if($value <= 100){
            return 'wd-100p';
        }
    }

    /*############################ QUIZ TAB ENDS ############################*/


    $('body').on('click', '#submitCourseBtn', function () {
       
        swal({
            title: "Are you sure?",
            text: "You will not be able to edit this course after submission!",
            type: "warning",
            showCancelButton: true,
            confirmButtonClass: "btn-danger",
            confirmButtonText: "Yes, Submit",
            cancelButtonText: "Cancel",
            closeOnConfirm: false,
            closeOnCancel: true
        },
            function (isConfirm) {
                if (isConfirm) {
                   
                    swal("Congratulations!", "Your course has been successfully submitted", "success");
                    setInterval(() => {
                        location.href = 'courses/index.html';
                    }, 2000);
                   
                }
            });
    });


})
