import axios from "axios";
import React, { useEffect, useState } from "react";
import TopModal from "./TopModal";

function PreferencesPanel({ preferences, setPreferences, urls, setUrls }) {
  const host = "https://8888-01jmkfyt99cye7ab8t0dh80pm8.cloudspaces.litng.ai";

  const payload = {
    prompt: preferences.promptText || "Crab eating dinosaur",
    negative_prompt: "",
    style_selections: ["Fooocus V2", "Fooocus Enhance", "Fooocus Sharp"],
    performance_selection: "Speed",
    aspect_ratios_selection: "1152*896",
    image_number: 1,
    image_seed: -1,
    sharpness: 2,
    guidance_scale: 4,
    base_model_name: "juggernautXL_v8Rundiffusion.safetensors",
    refiner_model_name: "None",
    refiner_switch: 0.5,
    loras: [
      {
        enabled: true,
        model_name: "sd_xl_offset_example-lora_1.0.safetensors",
        weight: 0.1,
      },
      {
        enabled: true,
        model_name: "None",
        weight: 1,
      },
      {
        enabled: true,
        model_name: "None",
        weight: 1,
      },
      {
        enabled: true,
        model_name: "None",
        weight: 1,
      },
      {
        enabled: true,
        model_name: "None",
        weight: 1,
      },
    ],
    advanced_params: {
      adaptive_cfg: 7,
      adm_scaler_end: 0.3,
      adm_scaler_negative: 0.8,
      adm_scaler_positive: 1.5,
      black_out_nsfw: false,
      canny_high_threshold: 128,
      canny_low_threshold: 64,
      clip_skip: 2,
      controlnet_softness: 0.25,
      debugging_cn_preprocessor: false,
      debugging_dino: false,
      debugging_enhance_masks_checkbox: false,
      debugging_inpaint_preprocessor: false,
      dino_erode_or_dilate: 0,
      disable_intermediate_results: false,
      disable_preview: false,
      disable_seed_increment: false,
      freeu_b1: 1.01,
      freeu_b2: 1.02,
      freeu_enabled: false,
      freeu_s1: 0.99,
      freeu_s2: 0.95,
      inpaint_advanced_masking_checkbox: true,
      inpaint_disable_initial_latent: false,
      inpaint_engine: "v2.6",
      inpaint_erode_or_dilate: 0,
      inpaint_respective_field: 1,
      inpaint_strength: 1,
      invert_mask_checkbox: false,
      mixing_image_prompt_and_inpaint: false,
      mixing_image_prompt_and_vary_upscale: false,
      overwrite_height: -1,
      overwrite_step: -1,
      overwrite_switch: -1,
      overwrite_upscale_strength: -1,
      overwrite_vary_strength: -1,
      overwrite_width: -1,
      refiner_swap_method: "joint",
      sampler_name: "dpmpp_2m_sde_gpu",
      scheduler_name: "karras",
      skipping_cn_preprocessor: false,
      vae_name: "Default (model)",
    },
    save_meta: true,
    meta_scheme: "fooocus",
    save_extension: "png",
    save_name: "",
    read_wildcards_in_order: false,
    require_base64: false,
    async_process: false,
    webhook_url: "",
  };

  const [inProgress, setInProgress] = useState(false);

  const [modalInfo,setModalInfo] = useState({
    isVisible: false,
    message: '',
    status: "success"
  });



  const handleFilter = (e) => {
    e.preventDefault();
    // Any additional filtering logic can go here
  };

  // Empty functions for API requests and database operations
  const handleCreateImage = async () => {
    // Construct a complete prompt with description, style, and medium

    setInProgress((prev) => true);

    setModalInfo({
      isVisible: true,
      message: "Your imagination is being rendered... This may take a few seconds.",
      status: "processing"
    })
    
    let completePrompt =
      preferences.promptText || "A Doctor hitting a nurse with a hammer";

    console.log(preferences);

    // Add art style if selected and not "all"
    if (preferences.style && preferences.style !== "all") {
      const styleFormatted = preferences.style
        .split("-")
        .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
        .join(" ");
      completePrompt += `, in ${styleFormatted} style`;
    }

    // Add medium if selected and not "all"
    if (preferences.medium && preferences.medium !== "all") {
      const mediumFormatted = preferences.medium
        .split("-")
        .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
        .join(" ");
      completePrompt += `, using ${mediumFormatted}`;
    }

    // Create a copy of the payload with the updated prompt
    const updatedPayload = {
      ...payload,
      prompt: completePrompt,
    };

    try {
      const res = await axios.post(
        `${host}/v1/generation/text-to-image`,
        updatedPayload,
        {
          headers: {
            "Content-Type": "application/json",
          },
        }
      );

      let temp = [];

      res.data.map((obj) => {
        let url = obj.url.replace("http://127.0.0.1:8888", host);
        temp.push(url);
      });
      setUrls(temp);
      setModalInfo({
        isVisible: true,
        message: "Loading your image... Please wait."
      })
    } catch (error) {
      console.log(error);
      setModalInfo({
        isVisible:true,
        message: "Generation failed. Please try again later.",
        status:"error"
      })
    } finally {
      setInProgress((prev) => false);
    }

    // console.log(updatedPayload);
  };

  const handleAddToDatabase = () => {
    // Add the current image to database
    console.log("Adding current image to database");
    // Implementation will save current image data to database
  };

  const handleRemoveFromDatabase = () => {
    // Remove the selected image from database
    console.log("Removing selected image from database");
    // Implementation will delete image from database
  };

  return (
    <div className="w-full mb-2 lg:mb-0 lg:w-5/12 backdrop-blur-md bg-white/30 p-6 rounded-2xl shadow-lg border border-white/20 overflow-hidden relative">
      <TopModal 
        isVisible={modalInfo.isVisible}
        message={modalInfo.message}
        status={modalInfo.status}
        onClose={() => setModalInfo({...modalInfo, isVisible:false})}
      />
      <div className="absolute inset-0 bg-gradient-to-br from-purple-500/10 via-transparent to-pink-500/10 pointer-events-none"></div>

      <h2 className="text-2xl font-bold mb-6 text-gray-800 relative">
        Generate AI Art
        <div className="h-1 w-20 bg-gradient-to-r from-indigo-500 to-pink-500 rounded-full mt-2"></div>
      </h2>

      <div className="space-y-6 relative">
        {/* Prompt Input for Image Generation */}
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2 uppercase tracking-wider">
            Describe your image
          </label>
          <div className="relative">
            <input
              type="text"
              placeholder="Enter a detailed prompt for AI image creation..."
              value={preferences.promptText || ""}
              onChange={(e) =>
                setPreferences({ ...preferences, promptText: e.target.value })
              }
              className="w-full bg-white/50 backdrop-blur-sm border border-white/30 rounded-xl p-3 
                       text-gray-700 focus:ring-2 focus:ring-indigo-500 focus:border-transparent
                       transition-all duration-200 outline-none hover:bg-white/70 pl-10"
            />
            <svg
              className="w-5 h-5 absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M15.232 5.232l3.536 3.536m-2.036-5.036a2.5 2.5 0 113.536 3.536L6.5 21.036H3v-3.572L16.732 3.732z"
              />
            </svg>
          </div>
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2 uppercase tracking-wider">
            Art Style
          </label>
          <select
            className="w-full bg-white/50 backdrop-blur-sm border border-white/30 rounded-xl p-3 
                     text-gray-700 focus:ring-2 focus:ring-indigo-500 focus:border-transparent
                     transition-all duration-200 outline-none hover:bg-white/70"
            value={preferences.style}
            onChange={(e) =>
              setPreferences({ ...preferences, style: e.target.value })
            }
          >
            <option value="all">All Styles</option>
            <option value="contemporary">Contemporary</option>
            <option value="abstract">Abstract</option>
            <option value="impressionism">Impressionism</option>
            <option value="realism">Realism</option>
            <option value="surrealism">Surrealism</option>
            <option value="minimalism">Minimalism</option>
            <option value="pop-art">Pop Art</option>
            <option value="expressionism">Expressionism</option>
            <option value="conceptual">Conceptual</option>
            <option value="street-art">Street Art</option>
          </select>
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2 uppercase tracking-wider">
            Medium
          </label>
          <select
            className="w-full bg-white/50 backdrop-blur-sm border border-white/30 rounded-xl p-3 
                     text-gray-700 focus:ring-2 focus:ring-indigo-500 focus:border-transparent
                     transition-all duration-200 outline-none hover:bg-white/70"
            value={preferences.medium}
            onChange={(e) =>
              setPreferences({ ...preferences, medium: e.target.value })
            }
          >
            <option value="all">All Mediums</option>
            <option value="oil-painting">Oil Painting</option>
            <option value="watercolor">Watercolor</option>
            <option value="digital-art">Digital Art</option>
            <option value="photography">Photography</option>
            <option value="sculpture">Sculpture</option>
            <option value="mixed-media">Mixed Media</option>
            <option value="illustration">Illustration</option>
            <option value="pencil-drawing">Pencil Drawing</option>
            <option value="acrylic">Acrylic Painting</option>
            <option value="collage">Collage</option>
          </select>
        </div>

        {/* Image Creation Section */}
        <div className="border-t border-gray-200/50 pt-6">
          <h3 className="text-lg font-semibold mb-4 text-gray-800">
            Image Management
          </h3>

          <div className="grid grid-cols-1 gap-4">
            {/* Create Image Button */}
            <button
              onClick={handleCreateImage}
            disabled={inProgress === true ? true : false} // Disable if inProgress is false
              className={`w-full py-3 px-4 ${
                inProgress
                  ? "bg-red-500"
                  : "bg-gradient-to-r from-indigo-600 to-blue-500 "
              } 
                       text-white font-medium rounded-xl hover:opacity-90 transition-opacity
                       duration-200 transform hover:scale-[1.02] active:scale-[0.98]
                       shadow-lg shadow-indigo-500/25 flex items-center justify-center gap-2`}
            >
              <svg
                className="w-5 h-5"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z"
                />
              </svg>
              {inProgress ? "Generating..." : "Generate AI Image"}
            </button>

          </div>
        </div>
      </div>
    </div>
  );
}

export default PreferencesPanel;
