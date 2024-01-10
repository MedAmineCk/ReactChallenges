import React from "react"
import torch from "../images/torch.png"

export default function Torch({torchEquipped}) {
    return !torchEquipped && <div className="inner-torch-container"><img src={torch}/><div className="torch-flame vibrate-less">🔥</div></div>
}