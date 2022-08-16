<script>
    import { getContext } from 'svelte';
      import { fly } from 'svelte/transition';
      
    import Popup from './Popup.svelte';
    import CloseButton from './CloseButton.svelte';

  
    const { open } = getContext('simple-modal');
      
  
    const showPopup = () => {
        open(Popup, { message: "Search api id" });
    };

  
  </script>
  
  <section>
      <button
        class="buttonPopup"
       on:click={showPopup}>Ver mas...</button>
  </section>
  
  <style>
      section {
          padding-top: 0.5em;
      }


        .buttonPopup {
            background-color: #FFFFFF;
            border: 1px solid #222222;
            border-radius: 8px;
            box-sizing: border-box;
            color: #222222;
            cursor: pointer;
            display: inline-block;
            font-family: Circular,-apple-system,BlinkMacSystemFont,Roboto,"Helvetica Neue",sans-serif;
            font-size: 16px;
            font-weight: 600;
            line-height: 20px;
            margin: 0;
            outline: none;
            padding: 5px 23px;
            text-align: center;
            text-decoration: none;
            touch-action: manipulation;
            transition: box-shadow .2s,-ms-transform .1s,-webkit-transform .1s,transform .1s;
            user-select: none;
            -webkit-user-select: none;
            width: auto;
        }

        .buttonPopup:focus-visible {
            box-shadow: #222222 0 0 0 2px, rgba(255, 255, 255, 0.8) 0 0 0 4px;
            transition: box-shadow .2s;
        }

        .buttonPopup:active {
            background-color: #F7F7F7;
            border-color: #000000;
            transform: scale(.96);
        }

        .buttonPopup:disabled {
            border-color: #DDDDDD;
            color: #DDDDDD;
            cursor: not-allowed;
            opacity: 1;
        }
      
      
  </style>