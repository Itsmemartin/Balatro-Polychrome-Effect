float noise(vec2 p){
    return sin(p.x*10.0 + sin(p.y*0.0));
}

void mainImage(out vec4 fragColor, in vec2 fragCoord)
{
    vec2 uv = fragCoord.xy / iResolution.xy;

    float pulse = 3.51 * sin(iTime*0.5);

    vec2 center = vec2(1.8, 1.8);
    float dist = distance(uv, center);

    float warp = 2.0 * sin(uv.y*5.0 + iTime*0.00) + 1.0 * cos(uv.x*8.0);

    float hue = mod((dist + warp + pulse)*1.5, 6.28318);

    vec3 color;
    color.r = 0.5 + 0.5 * cos(hue + 0.0);
    color.g = 0.5 + 0.5 * cos(hue + 2.094);
    color.b = 0.5 + 0.5 * cos(hue + 4.188);

    fragColor = vec4(color,1.0);
}
