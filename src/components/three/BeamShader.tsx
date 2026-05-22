"use client";

import { useFrame, useThree } from "@react-three/fiber";
import { useMemo, useRef } from "react";
import * as THREE from "three";

export default function BeamShader() {
  const materialRef = useRef<THREE.ShaderMaterial>(null);

  const { size } = useThree();

  const uniforms = useMemo(
    () => ({
      uTime: { value: 0 },

      uResolution: {
        value: new THREE.Vector2(
          size.width,
          size.height
        ),
      },

      uColorDark: {
        value: new THREE.Color(0.12, 0.05, 0.24),
      },

      uColorMid: {
        value: new THREE.Color(0.30, 0.14, 0.52),
      },

      uColorLight: {
        value: new THREE.Color(0.72, 0.58, 0.95),
      },
    }),
    [size]
  );

  useFrame((state) => {
    if (materialRef.current) {
      materialRef.current.uniforms.uTime.value =
        state.clock.elapsedTime;
    }
  });

  return (
    <mesh>
      <planeGeometry args={[2, 2]} />

      <shaderMaterial
        ref={materialRef}
        uniforms={uniforms}
        transparent

        vertexShader={`
          void main() {

            gl_Position =
              vec4(position, 1.0);

          }
        `}

        fragmentShader={`
uniform vec2 uResolution;
uniform float uTime;

uniform vec3 uColorDark;
uniform vec3 uColorMid;
uniform vec3 uColorLight;

// RANDOM
float random(vec2 st){

    return fract(
        sin(dot(st.xy,
        vec2(12.9898,78.233)))
        * 43758.5453123
    );
}

// NOISE
float noise(vec2 st){

    vec2 i = floor(st);
    vec2 f = fract(st);

    float a = random(i);
    float b = random(i + vec2(1.0,0.0));
    float c = random(i + vec2(0.0,1.0));
    float d = random(i + vec2(1.0,1.0));

    vec2 u =
        f * f * (3.0 - 2.0 * f);

    return mix(a,b,u.x)
        + (c-a)*u.y*(1.0-u.x)
        + (d-b)*u.x*u.y;
}

// GLOW
float glow(float d,float strength){

    return strength / max(d,0.0001);
}

void main(){

    vec2 uv =
        gl_FragCoord.xy /
        uResolution.xy;

    uv -= 0.5;

    uv.x *=
        uResolution.x /
        uResolution.y;

    vec3 color =
        vec3(0.0);

    // STRAIGHT CENTERED BEAM
    float centerX = 0.26;

    // WIDTH
    float widen =
        smoothstep(
            0.5,
            -0.5,
            uv.y
        );

    float width =
        mix(
            0.045,
            0.30,
            pow(widen,1.15)
        );

    // SUBTLE FLOW ONLY
    float distortion1 =
        noise(
            vec2(
                0.0,
                uv.y * 2.5
                - uTime * 0.35
            )
        ) * 0.004;

    float distortion2 =
        noise(
            vec2(
                0.0,
                uv.y * 6.0
                - uTime * 0.7
            )
        ) * 0.002;

    float flowX =
        centerX
        + distortion1
        + distortion2;

    // MAIN WATER
    float water =
        glow(
            abs(uv.x - flowX),
            width * 0.05
        );

    // CORE
    float core =
        glow(
            abs(uv.x - flowX),
            width * 0.008
        );

    // FLOW STREAMS
    float streams =
        noise(
            vec2(
                uv.x * 10.0,
                uv.y * 30.0
                - uTime * 2.0
            )
        );

    streams =
        smoothstep(
            0.2,
            1.0,
            streams
        );

    streams *= water;

    // ATMOSPHERIC GLOW
    float aura =
        glow(
            abs(uv.x - flowX)
            * (1.8 - widen * 1.5),

            0.03
        );

    aura *=
        smoothstep(
            0.55,
            -0.2,
            uv.y
        );

    // FLOOR IMPACT
    vec2 floorUV = uv;

    floorUV.x -= centerX;

    floorUV.y += 0.43;

    float floorGlow =
        glow(
            length(
                vec2(
                    floorUV.x * 0.48,
                    floorUV.y * 6.0
                )
            ),
            0.08
        );

    // COMBINE
    color += uColorDark * water * 1.5;

    color += uColorLight * core * 0.16;

    color += uColorMid * streams * 0.12;

    color += uColorMid * aura * 2.2;

    color += uColorMid * floorGlow * 4.0;

    // VIGNETTE
    float vignette =
        1.0 -
        length(uv) * 0.72;

    color *= vignette;

    // CONTRAST
    color =
        pow(
            color,
            vec3(1.18)
        );
// DEPTH ATMOSPHERE
float haze =
    smoothstep(
        0.7,
        -0.4,
        uv.y
    );

color += uColorMid * haze * 0.08;
    gl_FragColor =
        vec4(color,1.0);
}
`}
      />
    </mesh>
  );
}