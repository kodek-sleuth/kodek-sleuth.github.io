document.getElementById('employer_post_job').addEventListener('submit', validate_Job_Form)
const username = sessionStorage.getItem('employer_username')


function validate_Job_Form(f)
{
    f.preventDefault()
    var regex = /\d/;

    const job_title = document.getElementById('job_title').value;
    const job_description = document.getElementById('job_description').value;
    const job_main_stack = document.getElementById('job_main_stack').value;
    const job_other_stacks = document.getElementById('job_other_stacks').value;
    const job_type = document.getElementById('job_type').value;
        

    if(job_title==null||job_title=='' && job_description==null||job_description=='' && job_main_stack==null|| job_main_stack=='' && job_other_stacks==null|| job_other_stacks=='' && job_type==null|| job_type=='')
    {
        $(function()
            {
               
                $('#badFeedBack').show(500);
            }
        )
        document.getElementById('badFeedBack').innerHTML='Make sure you filled all Fields';
    }
   
    else
    {
        
        const job_title = document.getElementById('job_title').value;
        const job_description = document.getElementById('job_description').value;
        const job_main_stack = document.getElementById('job_main_stack').value;
        const job_other_stacks = document.getElementById('job_other_stacks').value;
        const job_type = document.getElementById('job_type').value;
    
        fetch('https://job-portal-online.herokuapp.com/employer/'+username+'/post',{
            method:'POST',
            headers:{
                'Accept':'application/json, text/plain, */*',
                'Content-type':'application/json'
            },
              
            body:JSON.stringify({"Job Title":job_title, "Job Description":job_description, "Main Skill":job_main_stack, "Other Skills":job_other_stacks, "Job Type":job_type})
    
            })
            .then((response)=> response.json())
            .then((data)=> {
                if(data.Message== "You have successfully Posted Job")
                {
                    document.getElementById('badFeedBack').style.display='none';
                    $(function()
                    {
                        window.location="/employer_dashboard.html"
                        $('#goodFeedBack').show(500);
                        document.getElementById('goodFeedBack').innerHTML='You have successfully Posted Job'
                    }
                    )
                }

                else
                {
                    $(function()
                    {
    
                        $('#badFeedBack').show(500);
                        document.getElementById('badFeedBack').innerHTML='Failed To Post Job'
                    }
                    )
                }
            })
           
            return true
    }

}


document.getElementsByClassName('menu_icon_size')[0].addEventListener('click', revert)

function revert()
{
    window.location='/employer_dashboard.html'
}

document.getElementsByClassName('menu_icon_size_resp')[0].addEventListener('click', return_profile)

function return_profile()
{
    window.location="/employer_dashboard.html"
}