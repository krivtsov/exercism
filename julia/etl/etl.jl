function transform(input::AbstractDict)
    result = Dict()
    for (index, value) in input
        for (_, val) in enumerate(value)
            result[lowercase(val)] = index
        end
    end
    return result;
end

