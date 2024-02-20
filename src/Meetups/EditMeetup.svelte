<script>
    import {createEventDispatcher} from 'svelte'
    import TextInput from '../UI/TextInput.svelte';
    import Button from '../UI/Button.svelte';
    import Modal from '../UI/Modal.svelte';
    import { isEmpty,isValidEmail} from "../helpers/validation";
    let title="";
    let subtitle="";
    let address="";
    let email="";
    let description="";
    let imageUrl="";
    const dispatch = createEventDispatcher();
    function cancel(){
        dispatch('cancel');
    }

    $:titleValid =!isEmpty(title);
    $:subtitleValid =!isEmpty(subtitle);
    $:addressValid =!isEmpty(address);
    $:descriptionValid =!isEmpty(description);
    $:imageUrlValid =!isEmpty(imageUrl);
    $:emailValid =!isEmpty(email);
    $:formIsValid = titleValid && subtitleValid && addressValid && addressValid && imageUrlValid && emailValid;


    function submitForm(){
        dispatch('save',{
            title:title,
            subtitle:subtitle,
            address:address,
            email:email,
            description:description,
            imageUrl:imageUrl

        });
    }
</script>
<style>
        form{
        width: 100%;
    }
</style>
<Modal title="Edit Meetup Data"on:cancel>
<form on:submit|preventDefault={submitForm}>
    <TextInput 
    id="title" 
    label="Title" 
    valid={titleValid}
    validityMessage="Please enter a valid title."
    value={title}
    on:input="{event=> (title = event.target.value)}"/>
    <TextInput 
    id="subtitle" 
    label="Subtitle" 
    valid={subtitleValid}
    validityMessage="Please enter a valid subtitle."
    value={subtitle}
    on:input="{event=>(subtitle = event.target.value)}"/>
    <TextInput id="address" 
    label="Address" 
    valid={addressValid}
    validityMessage="Please enter a valid address."
    value={address}
    on:input="{event=>(address = event.target.value)}"/>
    <TextInput id="imageUrl" 
    label="Image URL" 
    valid={imageUrlValid}
    validityMessage="Please enter a valid image Url."
    value={imageUrl}
    on:input="{event=> (imageUrl = event.target.value)}"/>
    <TextInput id="email" 
    label="E-mail" 
    valid={emailValid}
    validityMessage="Please enter a valid email address."
    value={email}
    type = "email"
    on:input="{event=> (email = event.target.value)}"/>
    <TextInput 
    id="description" 
    label="Description" 
    valid={descriptionValid}
    validityMessage="Please enter a valid description."
    controlType="textarea"
    bind:value={description}/>
</form>
    <div slot="footer">
    <Button type="button" mode="outline" on:click={cancel}>Cancel</Button>
    <Button type="button" on:click={submitForm} disabled={!formIsValid}>Save</Button>
    </div>
</Modal>